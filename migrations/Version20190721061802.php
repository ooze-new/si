<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190721061802 extends AbstractMigration
{
    const TABLE_NAME = 'tasks';

    public function getDescription() : string
    {
        return 'Create tasks table';
    }

    public function up(Schema $schema) : void
    {
        $table = $schema->createTable(self::TABLE_NAME);

        $table->addColumn('id', 'string')
            ->setLength(36)
            ->setNotnull(true)
        ;

        $table->addColumn('user_id', 'string')
            ->setLength(36)
            ->setNotnull(true)
        ;

        $table->addColumn('status_id', 'string')
            ->setLength(36)
            ->setNotnull(true)
        ;

        $table->addColumn('priority_id', 'string')
            ->setLength(36)
            ->setNotnull(true)
        ;

        $table->addColumn('name', 'string')
            ->setLength(255)
            ->setNotnull(true)
        ;

        $table
            ->setPrimaryKey(array('id'))
            ->addForeignKeyConstraint(
                'users',
                array('user_id'),
                array('id'),
                array(
                    'onUpdate' => 'CASCADE',
                    'onDelete' => 'CASCADE',
                )
            )
            ->addForeignKeyConstraint(
                'task_status',
                array('status_id'),
                array('id'),
                array(
                    'onUpdate' => 'CASCADE',
                    'onDelete' => 'RESTRICT',
                )
            )
            ->addForeignKeyConstraint(
                'task_priority',
                array('priority_id'),
                array('id'),
                array(
                    'onUpdate' => 'CASCADE',
                    'onDelete' => 'RESTRICT',
                )
            )
        ;
    }

    public function down(Schema $schema) : void
    {
        $schema->dropTable(self::TABLE_NAME);
    }
}
