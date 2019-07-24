<?php
namespace Services;

use Doctrine\DBAL\FetchMode;
use \YaLinqo\Enumerable;
use Doctrine\DBAL\Connection;
use Entity\Task;

/**
 * Task repository class
 */
class TaskService extends AbstractDbService
{
    const TABLE_NAME = 'tasks';
    const TAG_BIND_TABLE_NAME = 'tasks_tag_bind';
    const USER_TABLE_NAME = 'users';
    const STATUS_TABLE_NAME = 'task_status';
    const PRIORITY_TABLE_NAME = 'task_priority';
    const TAG_TABLE_NAME = 'tags';

    //
    private function mormalizeSortInfo(string $field, string $mode)
    {
        $sortFields = [
            'name' => 't.name',
            'status' => 'ts.order_index',
            'priority' => 'tp.order_index',
        ];

        $sortModes = [
            'asc' => true,
            'desc' => true,
        ];

        return (object) [
            'field' => isset($sortFields[$field])
                ? $sortFields[$field]
                : $sortFields['status'],
            'mode' => isset($sortModes[$mode])
                ? $mode
                : 'asc',
        ];
    }

    /**
     * Get task list
     *
     * @param string $userId uuid4 user identificator
     * @param string $statusId uuid4 status identificator
     * @param string $priorityId uid4 priority identificator
     * @param integer $offset
     * @param integer $limitt
     * @param string $orderField sort field
     * @param string $priorityMode sort mode (asc|desc)
     * @return Task[]
     */
    public function list(
        string $userId,
        string $statusId = '',
        string $priorityId = '',
        int $offset = 0,
        int $limit = 20,
        string $orderField = '',
        string $priorityMode = ''
    )
    {
        $sortInfo = $this->mormalizeSortInfo($orderField, $priorityMode);

        $qb = $this->connection->createQueryBuilder();
        $qb
            ->select('
                t.id,
                t.user_id as userId,
                u.email as user,
                t.status_id as statusId,
                ts.name as status,
                t.priority_id as priorityId,
                tp.name as priority,
                t.name
            ')
            ->from(self::TABLE_NAME, 't')
            ->join('t', self::USER_TABLE_NAME, 'u', 'u.id = t.user_id')
            ->join('t', self::STATUS_TABLE_NAME, 'ts', 'ts.id = t.status_id')
            ->join('t', self::PRIORITY_TABLE_NAME, 'tp', 'tp.id = t.priority_id')
            ->where('t.user_id = :user_id')
            ->orderBy(
                $sortInfo->field,
                $sortInfo->mode
            )
            ->setParameter(':user_id', $userId)
        ;

        if ($statusId) {
            $qb
                ->andWhere('t.status_id = :status_id')
                ->setParameter(':status_id', $statusId)
            ;
        }

        if ($priorityId) {
            $qb
                ->andWhere('t.priority_id = :priority_id')
                ->setParameter(':priority_id', $priorityId)
            ;
        }

        if ($offset > 0) {
            $qb->setFirstResult($offset);
        }        

        if ($limit > 0) {
            $qb->setMaxResults($limit);
        }

        $result = $qb
            ->execute()
            ->fetchAll(
                FetchMode::CUSTOM_OBJECT,
                Task::class
            )
        ;

        $tags = $this->getTags(array_map(
            function($task): string {
                return $task->id;
            },
            $result
        ));

        $result = Enumerable::from($result)
            ->groupJoin(
                Enumerable::from($tags),
                '$task ==> $task->id',
                '$tag ==> $tag->task_id',
                '($task, $tags) ==> {
                    $task->tags = $tags
                        ->select(
                            \'($tag) ==> (object) [
                                "id" => $tag->id,
                                "name" => $tag->name
                            ]\'
                        )
                        ->toArray()
                    ;

                    return $task;
                 }'
            )
            ->toArray()
        ;

        return array_values($result);
    }

    /**
     * Get task count
     * 
     * @param string $statusId uuid4 status identificator
     * @param string $priorityId uid4 priority identificator
     * @return int
     */
    public function count(
        string $userId,
        string $statusId = '',
        string $priorityId = ''
    ): int
    {
        $qb = $this->connection->createQueryBuilder();

        $qb
            ->select('
                count(*)
            ')
            ->from(self::TABLE_NAME, 't')
            ->where('t.user_id = :user_id')
            ->setParameter(':user_id', $userId)
        ;

        if ($statusId) {
            $qb
                ->andWhere('t.status_id = :status_id')
                ->setParameter(':status_id', $statusId)
            ;
        }

        if ($priorityId) {
            $qb
                ->andWhere('t.priority_id = :priority_id')
                ->setParameter(':priority_id', $priorityId)
            ;
        }

        return $qb
            ->execute()
            ->fetchColumn(0)
        ;
    }

    /**
     * Get task
     *
     * @param string $id uuid4 task identificator
     * @param string $userId uuid4 user identificator
     * @return Task|null
     */
    public function get(string $id, string $userId): ?Task
    {
        $qb = $this->connection->createQueryBuilder();

        $qb
            ->select('
                t.id,
                t.user_id as userId,
                u.email as user,
                t.status_id as statusId,
                ts.name as status,
                t.priority_id as priorityId,
                tp.name as priority,
                t.name
            ')
            ->from(self::TABLE_NAME, 't')
            ->join('t', self::USER_TABLE_NAME, 'u', 'u.id = t.user_id')
            ->join('t', self::STATUS_TABLE_NAME, 'ts', 'ts.id = t.status_id')
            ->join('t', self::PRIORITY_TABLE_NAME, 'tp', 'tp.id = t.priority_id')
            ->where('t.id = :id')
            ->andWhere('t.user_id = :user_id')
            ->setParameter(':id', $id)
            ->setParameter(':user_id', $userId)
        ;

        $result = $qb
            ->execute()
            ->fetch(
                FetchMode::STANDARD_OBJECT
            );

        if (!$result) {
            return null;
        }

        $tags = $this->getTags(array_map(
            function($task): string {
                return $task->id;
            },
            [$result]
        ));

        $result  = Enumerable::from([$result])
            ->groupJoin(
                Enumerable::from($tags),
                '$task ==> $task->id',
                '$tag ==> $tag->task_id',
                '($task, $tags) ==> {
                    $task->tags = $tags
                        ->select(
                            \'($tag) ==> (object) [
                                "id" => $tag->id,
                                "name" => $tag->name
                            ]\'
                        )
                        ->toArray()
                    ;

                    return $task;
                 }'
            )
            ->first()
        ;

        return Task::fromObject($result);
    }

    /**
     * Create task
     *
     * @param Task $task
     * @return string
     */
    public function create(Task $task): string
    {
        $id = $this->generateUuid();

        $qb = $this->connection->createQueryBuilder();

        $qb
            ->insert(self::TABLE_NAME)
            ->values([
                'id' => ':id',
                'user_id' => ':user_id',
                'status_id' => ':status_id',
                'priority_id' => ':priority_id',
                'name' => ':name',
            ])
            ->setParameter(':id', $id)
            ->setParameter(':user_id', $task->userId)
            ->setParameter(':status_id', $task->statusId)
            ->setParameter(':priority_id', $task->priorityId)
            ->setParameter(':name', $task->name)
        ;

        $result = $qb->execute();

        $this->bindTags($id, $task->tags);

        return $id;
    }

    /**
     * Update task
     *
     * @param Task $task
     * @return string
     */
    public function update(Task $task)
    {
        $qb = $this->connection->createQueryBuilder();

        $qb
            ->update(self::TABLE_NAME, 't')
            ->set('t.name', ':name')
            ->set('t.status_id', ':status_id')
            ->set('t.priority_id', ':priority_id')
            ->where('t.id = :id')
            ->andWhere('t.user_id = :user_id')
            ->setParameter(':id', $task->id)
            ->setParameter(':user_id', $task->userId)
            ->setParameter(':status_id', $task->statusId)
            ->setParameter(':priority_id', $task->priorityId)
            ->setParameter(':name', $task->name)
        ;

        $result = $qb->execute();

        $this->bindTags($task->id, $task->tags);

        return $task->id;
    }

    /**
     * Delete task
     *
     * @param string $id uuid4 task identificator
     * @param string $userId uuid4 user identificator
     * @return void
     */
    public function delete(string $id, string $userId)
    {
        $qb = $this->connection->createQueryBuilder();

        $qb
            ->delete(self::TABLE_NAME)
            ->where('id = :id')
            ->andWhere('user_id = :user_id')
            ->setParameter(':id', $id)
            ->setParameter(':user_id', $userId)
        ;

        return $qb->execute();
    }

    /**
     * Get tags for Tasks
     *
     * @param array $taskIds
     * @return array
     */
    private function getTags(array $taskIds): array
    {
        $qb = $this->connection->createQueryBuilder();

		if(empty($taskIds)) {
            return [];
        }

        $qb
            ->select('b.task_id, t.id, t.name')
            ->from(self::TAG_BIND_TABLE_NAME, 'b')
            ->join('b', self::TAG_TABLE_NAME, 't', 'b.tag_id = t.id')
            ->where('b.task_id in (:task_ids)')
            ->setParameter(':task_ids', $taskIds, Connection::PARAM_STR_ARRAY)
        ;

        return $qb
            ->execute()
            ->fetchAll(
                FetchMode::STANDARD_OBJECT
            )
        ;
    }

    /**
     * Bind tags
     *
     * @param string $id uuid4 task identificator
     * @param array $tags
     * @return void
     */
    private function bindTags(string $id, array $tags)
    {
        $qb = $this->connection->createQueryBuilder();

        $tags = array_map(
            function($tag) { return $tag->id; },
            $tags
        );

        $qb
            ->select('b.tag_id')
            ->from(self::TAG_BIND_TABLE_NAME, 'b')
            ->where('b.task_id = :task_id')
            ->setParameter(':task_id', $id)
        ;

        $binded = array_map(
            function($item) {
                return $item->tag_id;   
            },
            $qb
                ->execute()
                ->fetchAll(
                    FetchMode::STANDARD_OBJECT
                )
        );

        $unbind = [];
        foreach ($binded as $tag) {
            if (!in_array($tag, $tags)) {
                $unbind[] = $tag;
            }
        }

        if ($tags) {
            foreach ($tags as $tagId) {
                if (in_array($tagId, $binded)) {
                    continue;
                }

                $qb = $this->connection->createQueryBuilder();

                $qb
                    ->insert(self::TAG_BIND_TABLE_NAME)
                    ->values([
                        'task_id' => ':task_id',
                        'tag_id' => ':tag_id',
                    ])
                    ->setParameter(':task_id', $id)
                    ->setParameter(':tag_id', $tagId)
                ;
        
                $qb->execute();
            }
        }

        if ($unbind) {
            $qb = $this->connection->createQueryBuilder();

            $qb
                ->delete(self::TAG_BIND_TABLE_NAME)
                ->where('task_id = :task_id')
                ->andWhere('tag_id in (:tag_id)')
                ->setParameter(':task_id', $id)
                ->setParameter(':tag_id', $unbind, Connection::PARAM_STR_ARRAY)
            ;
    
            $qb->execute();
        }
    }
}
