<?php

use Symfony\Component\Console\Application;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputArgument;
use Providers\MigrationServiceProvider;
use Symfony\Component\Console\Input\InputOption;
use Doctrine\Migrations\Configuration\Configuration;
use Doctrine\Migrations\Tools\Console\Command;

$console = new Application('My Silex Application', 'n/a');
$console->getDefinition()->addOption(new InputOption('--env', '-e', InputOption::VALUE_REQUIRED, 'The Environment name.', 'dev'));
$console->setDispatcher($app['dispatcher']);
$console
    ->register('my-command')
    ->setDefinition(array(
        // new InputOption('some-option', null, InputOption::VALUE_NONE, 'Some help'),
    ))
    ->setDescription('My command description')
    ->setCode(function (InputInterface $input, OutputInterface $output) use ($app) {
        // do something
    })
;

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

return $console;
