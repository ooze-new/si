<?php
namespace Commands\TaskPriority;

use Commands\AbstractAppCommand;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Helper\Table;

use Entity\TaskPriority;

/**
 * Task priority list command class
 */
class TaskPriorityListCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('task-priority:list')
            ->setDescription('Task priority list')
            ->setHelp("This command show task priority list")
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $taskPriorityService = $this->app['task_priority_service'];
        $taskPriorityList = $taskPriorityService->list();

        $table = new Table($output);

        $table
            ->setHeaders(array('id', 'name', 'order index'))
        ;

        foreach ($taskPriorityList as $taskPriority) {
            $table
                ->addRow([
                    $taskPriority->id,
                    $taskPriority->name,
                    $taskPriority->orderIndex,
                ])
            ;
        }

        $table->render();
    }
}
