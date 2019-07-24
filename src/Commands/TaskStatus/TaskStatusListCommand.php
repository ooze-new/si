<?php
namespace Commands\TaskStatus;

use Commands\AbstractAppCommand;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Helper\Table;


use Entity\TaskStatus;

/**
 * Task status list command class
 */
class TaskStatusListCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('task-status:list')
            ->setDescription('Task status list')
            ->setHelp("This command show task status list")
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $taskStatusService = $this->app['task_status_service'];
        $taskStatusList = $taskStatusService->list();

        $table = new Table($output);

        $table
            ->setHeaders(array('id', 'name', 'order index'))
        ;

        foreach ($taskStatusList as $taskStatus) {
            $table
                ->addRow([
                    $taskStatus->id,
                    $taskStatus->name,
                    $taskStatus->orderIndex,
                ])
            ;
        }

        $table->render();
    }
}