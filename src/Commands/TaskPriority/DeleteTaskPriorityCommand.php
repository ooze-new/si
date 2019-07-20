<?php
namespace Commands\TaskPriority;

use Commands\AbstractAppCommand;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\ConfirmationQuestion;

use Entity\TaskPriority;

/**
 * Delete task priority command class
 */
class DeleteTaskPriorityCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('task-priority:delete')
            ->setDescription('Remove task priority')
            ->setHelp("This command remove task priority")
            ->addArgument('id', InputArgument::REQUIRED, 'The task priority id.')
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $id = $input->getArgument('id');
        $taskPriorityService = $this->app['task_priority_service'];

        $taskPriority = $taskPriorityService->get($id);

        if (!$taskPriority) {
            $output->writeln('<error>Task priority not find</error>');
            return;
        }

        $output->writeln(sprintf('id: %s', $taskPriority->id));
        $output->writeln(sprintf('name: %s', $taskPriority->name));

        $helper = $this->getHelper('question');
        $question = new ConfirmationQuestion('delete task priority?(y/n): ', false);

        if (!$helper->ask($input, $output, $question)) {
            return;
        }

        $taskPriorityService->delete($id);

        $output->writeln('<info>task priority successfully deleted!</info>');
    }
}
