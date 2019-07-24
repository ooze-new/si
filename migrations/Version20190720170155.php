<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190720170155 extends AbstractMigration
{
    const TABLE_NAME = 'task_priority';

    public function getDescription() : string
    {
        return 'Create task_priority table';
    }

    public function up(Schema $schema) : void
    {
        $table = $schema->createTable(self::TABLE_NAME);

        $table->addColumn('id', 'string')
            ->setLength(36)
            ->setNotnull(true)
        ;

        $table->addColumn('name', 'string')
            ->setLength(255)
            ->setNotnull(true)
        ;

        $table
            ->setPrimaryKey(array('id'))
        ;
    }

    public function down(Schema $schema) : void
    {
        $schema->dropTable(self::TABLE_NAME);
    }
}
