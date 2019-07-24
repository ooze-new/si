<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

const TABLE_NAME = 'users';

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190718074454 extends AbstractMigration
{
    public function getDescription() : string
    {
        return 'Create users table';
    }

    public function up(Schema $schema) : void
    {
        $table = $schema->createTable(TABLE_NAME);

        $table->addColumn('id', 'string')
            ->setLength(36)
            ->setNotnull(false)
        ;

        $table->addColumn('email', 'string')
            ->setLength(255)
            ->setNotnull(false)
        ;

        $table->addColumn('password', 'string')
            ->setLength(100)
            ->setNotnull(false)
        ;

        $table
            ->setPrimaryKey(array('id'))
            ->addUniqueIndex(array('email'))
        ;
    }

    public function down(Schema $schema) : void
    {
        $schema->dropTable(TABLE_NAME);
    }
}
