<?php
namespace Services;

use Doctrine\DBAL\FetchMode;
use Entity\TaskStatus;

/**
 * TaskStatus repository class
 */
class TaskStatusService extends AbstractDbService
{
    const TABLE_NAME = 'task_status';

    /**
     * Get task status list
     *
     * @return Entity\TaskStatus[]
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
                TaskStatus::class
            )
        ;
    }

    /**
     * Get task status by id
     *
     * @param string $id uuid4 task status identificator
     * @return TaskStatus|null
     */
    public function get(string $id): ?TaskStatus
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

        return TaskStatus::fromObject($result);
    }

    /**
     * Create task status
     *
     * @param TaskStatus $taskStatus
     * @return void
     */
    public function create(TaskStatus $taskStatus)
    {
        $this->queryBuilder
            ->insert(self::TABLE_NAME)
            ->values([
                'id' => ':id',
                'name' => ':name',
            ])
            ->setParameter(':id', $this->generateUuid())
            ->setParameter(':name', $taskStatus->name)
        ;

        return $this->queryBuilder->execute();
    }

    /**
     * Update task status
     *
     * @param TaskStatus $taskStatus
     * @return void
     */
    public function update(TaskStatus $taskStatus)
    {
        $this->queryBuilder
            ->update(self::TABLE_NAME, 'ts')
            ->set('ts.name', ':name')
            ->where('ts.id = :id')
            ->setParameter(':id', $taskStatus->id)
            ->setParameter(':name', $taskStatus->name)
        ;

        return $this->queryBuilder->execute();
    }

    /**
     * Delete task status
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
