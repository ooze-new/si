<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190721093226 extends AbstractMigration
{
    const TABLE_NAME = 'tasks_tag_bind';

    public function getDescription() : string
    {
        return 'Create tasks_tag_bind table';
    }

    public function up(Schema $schema) : void
    {
        $table = $schema->createTable(self::TABLE_NAME);

        $table->addColumn('task_id', 'string')
            ->setLength(36)
            ->setNotnull(true)
        ;

        $table->addColumn('tag_id', 'string')
            ->setLength(36)
            ->setNotnull(true)
        ;

        $table
            ->setPrimaryKey(array('task_id', 'tag_id'))
            ->addForeignKeyConstraint(
                'tasks',
                array('task_id'),
                array('id'),
                array(
                    'onUpdate' => 'CASCADE',
                    'onDelete' => 'CASCADE',
                )
            )
            ->addForeignKeyConstraint(
                'tags',
                array('tag_id'),
                array('id'),
                array(
                    'onUpdate' => 'CASCADE',
                    'onDelete' => 'CASCADE',
                )
            )
        ;
    }

    public function down(Schema $schema) : void
    {
        $schema->dropTable(self::TABLE_NAME);
    }
}
