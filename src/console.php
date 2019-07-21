<?php

use Symfony\Component\Console\Application;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputArgument;
use Providers\MigrationServiceProvider;
use Symfony\Component\Console\Input\InputOption;
use Doctrine\Migrations\Configuration\Configuration;
use Doctrine\Migrations\Tools\Console\Command;

use Commands\CreateUserCommand;
use Commands\ChangePasswordCommand;
use Commands\DeleteUserCommand;
use Commands\TaskStatus\TaskStatusListCommand;
use Commands\TaskStatus\CreateTaskStatusCommand;
use Commands\TaskStatus\UpdateTaskStatusCommand;
use Commands\TaskStatus\DeleteTaskStatusCommand;
use Commands\TaskPriority\TaskPriorityListCommand;
use Commands\TaskPriority\CreateTaskPriorityCommand;
use Commands\TaskPriority\UpdateTaskPriorityCommand;
use Commands\TaskPriority\DeleteTaskPriorityCommand;
use Commands\Tag\TagListCommand;
use Commands\Tag\CreateTagCommand;
use Commands\Tag\UpdateTagCommand;
use Commands\Tag\DeleteTagCommand;

$console = new Application('My Silex Application', 'n/a');
$console->getDefinition()->addOption(new InputOption('--env', '-e', InputOption::VALUE_REQUIRED, 'The Environment name.', 'dev'));
$console->setDispatcher($app['dispatcher']);

$config = new Configuration($app['db']);
$config->setMigrationsNamespace($app['db.migrations.namespace']);

if ($app['db.migrations.path']) {
    if (!is_dir($app['db.migrations.path'])) {
        if (!mkdir($app['db.migrations.path'])) {
            throw new \InvalidArgumentException(
                'db.migrations.path directory does not exist, and unable to create it'
            );
        }
    }

    $config->setMigrationsDirectory($app['db.migrations.path']);
    $config->registerMigrationsFromDirectory($app['db.migrations.path']);
}

if ($app['db.migrations.name']) {
    $config->setName($app['db.migrations.name']);
}

if ($app['db.migrations.table_name']) {
    $config->setMigrationsTableName($app['db.migrations.table_name']);
}

$commands = array(
    new Command\DiffCommand(),
    new Command\ExecuteCommand(),
    new Command\GenerateCommand(),
    new Command\MigrateCommand(),
    new Command\StatusCommand(),
    new Command\VersionCommand(),
);

foreach ($commands as $command) {
    $command->setMigrationConfiguration($config);
    $console->add($command);
}

$console->add(new CreateUserCommand($app));
$console->add(new ChangePasswordCommand($app));
$console->add(new DeleteUserCommand($app));

$console->add(new TaskStatusListCommand($app));
$console->add(new CreateTaskStatusCommand($app));
$console->add(new UpdateTaskStatusCommand($app));
$console->add(new DeleteTaskStatusCommand($app));

$console->add(new TaskPriorityListCommand($app));
$console->add(new CreateTaskPriorityCommand($app));
$console->add(new UpdateTaskPriorityCommand($app));
$console->add(new DeleteTaskPriorityCommand($app));

$console->add(new TagListCommand($app));
$console->add(new CreateTagCommand($app));
$console->add(new UpdateTagCommand($app));
$console->add(new DeleteTagCommand($app));

return $console;
