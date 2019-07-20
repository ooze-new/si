<?php
namespace Services;

use Doctrine\DBAL\FetchMode;
use Entity\TaskPriority;

/**
 * TaskPriority repository class
 */
class TaskPriorityService extends AbstractDbService
{
    const TABLE_NAME = 'task_priority';

    /**
     * Get task priority list
     *
     * @return Entity\TaskPriority[]
     */
    public function list()
    {
        $this->queryBuilder
            ->select('ts.id, ts.name')
            ->from(self::TABLE_NAME, 'ts')
        ;

        return $this->queryBuilder
            ->execute()
            ->fetchAll(
                FetchMode::CUSTOM_OBJECT,
                TaskPriority::class
            )
        ;
    }

    /**
     * Get task priority by id
     *
     * @param string $id uuid4 task status identificator
     * @return TaskPriority|null
     */
    public function get(string $id): ?TaskPriority
    {
        $this->queryBuilder
            ->select('ts.id, ts.name')
            ->from(self::TABLE_NAME, 'ts')
            ->where('ts.id = :id')
            ->setParameter(':id', $id)
        ;

        $result = $this->queryBuilder
            ->execute()
            ->fetch(
                FetchMode::STANDARD_OBJECT
            );

        if (!$result) {
            return null;
        }

        return TaskPriority::fromObject($result);
    }

    /**
     * Create task priority
     *
     * @param TaskPriority $taskPriority
     * @return void
     */
    public function create(TaskPriority $taskPriority)
    {
        $this->queryBuilder
            ->insert(self::TABLE_NAME)
            ->values([
                'id' => ':id',
                'name' => ':name',
            ])
            ->setParameter(':id', $this->generateUuid())
            ->setParameter(':name', $taskPriority->name)
        ;

        return $this->queryBuilder->execute();
    }

    /**
     * Update task priority
     *
     * @param TaskPriority $taskPriority
     * @return void
     */
    public function update(TaskPriority $taskPriority)
    {
        $this->queryBuilder
            ->update(self::TABLE_NAME, 'ts')
            ->set('ts.name', ':name')
            ->where('ts.id = :id')
            ->setParameter(':id', $taskPriority->id)
            ->setParameter(':name', $taskPriority->name)
        ;

        return $this->queryBuilder->execute();
    }

    /**
     * Delete task priority
     *
     * @param string $id
     * @return void
     */
    public function delete(string $id)
    {
        $this->queryBuilder
            ->delete(self::TABLE_NAME)
            ->where('id = :id')
            ->setParameter(':id', $id)
        ;

        return $this->queryBuilder->execute();
    }
}
