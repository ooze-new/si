<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190723130937 extends AbstractMigration
{
    const TABLE_NAME = 'task_priority';

    public function getDescription() : string
    {
        return 'add order_index in task_priority table';
    }

    public function up(Schema $schema) : void
    {
        $table = $schema->getTable(self::TABLE_NAME);

        $table
            ->addColumn('order_index', 'integer')
            ->setLength(100)
            ->setNotnull(true)
        ;
    }

    public function postUp(Schema $schema) : void
    {
        $this->addSql("
            UPDATE self::TABLE_NAME SET
                order_index = @num:=@num+1
            WHERE
                0 IN (SELECT @num:=0)
        ");
    }

    public function down(Schema $schema) : void
    {
        $table = $schema->getTable(self::TABLE_NAME);

        $table
            ->dropColumn('order_index')
        ;
    }
}
