<?php
namespace Services;

use Doctrine\DBAL\Connection;
use Ramsey\Uuid\Uuid;


abstract class AbstractDbService
{
    /**
     * @var Doctrine\DBAL\Connection
     */
    protected $connection;

    /**
     * @var Doctrine\DBAL\Query\QueryBuilder
     */
    protected $queryBuilder;

    /**
     * Constructor
     *
     * @param Doctrine\DBAL\Connection $connection
     */
    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
        $this->queryBuilder = $connection->createQueryBuilder();
    }

    /**
     * Generate uuid4 identificator
     *
     * @return string
     */
    protected function generateUuid() {
        $uuid = Uuid::uuid4();

        return $uuid->toString();
    }
}
