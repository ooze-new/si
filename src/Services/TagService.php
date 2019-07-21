<?php
namespace Services;

use Doctrine\DBAL\FetchMode;
use Entity\Tag;

/**
 * Tags repository class
 */
class TagService extends AbstractDbService
{
    const TABLE_NAME = 'tags';

    /**
     * Get tag list
     *
     * @return Entity\Tag[]
     */
    public function list()
    {
        $this->queryBuilder
            ->select('t.id, t.name')
            ->from(self::TABLE_NAME, 't')
        ;

        return $this->queryBuilder
            ->execute()
            ->fetchAll(
                FetchMode::CUSTOM_OBJECT,
                Tag::class
            )
        ;
    }

    /**
     * Get lookup task list
     *
     * @param string $name
     * @param integer $limit
     * @return Entity\Tag[]
     */
    public function lookup(string $name, int $limit = 0)
    {
        $this->queryBuilder
            ->select('t.id, t.name')
            ->from(self::TABLE_NAME, 't')
            ->where('t.name like :name')
            ->setParameter(':name',  sprintf('%s%%', $name))
        ;

        if ($limit > 0) {
            $this->queryBuilder->setMaxResults($limit);
        }

        return $this->queryBuilder
            ->execute()
            ->fetchAll(
                FetchMode::CUSTOM_OBJECT,
                Tag::class
            )
        ;
    }

    /**
     * Get tag by id
     *
     * @param string $id uuid4 task status identificator
     * @return Tag|null
     */
    public function get(string $id): ?Tag
    {
        $this->queryBuilder
            ->select('t.id, t.name')
            ->from(self::TABLE_NAME, 't')
            ->where('t.id = :id')
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

        return Tag::fromObject($result);
    }

    /**
     * Create tag
     *
     * @param Tag $tag
     * @return void
     */
    public function create(Tag $tag)
    {
        $this->queryBuilder
            ->insert(self::TABLE_NAME)
            ->values([
                'id' => ':id',
                'name' => ':name',
            ])
            ->setParameter(':id', $this->generateUuid())
            ->setParameter(':name', $tag->name)
        ;

        return $this->queryBuilder->execute();
    }

    /**
     * Update tag
     *
     * @param Tag $tag
     * @return void
     */
    public function update(Tag $tag)
    {
        $this->queryBuilder
            ->update(self::TABLE_NAME, 't')
            ->set('t.name', ':name')
            ->where('t.id = :id')
            ->setParameter(':id', $tag->id)
            ->setParameter(':name', $tag->name)
        ;

        return $this->queryBuilder->execute();
    }

    /**
     * Delete tag
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
