<?php
namespace Commands\TaskStatus;

use Commands\AbstractAppCommand;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\ConfirmationQuestion;

use Entity\TaskStatus;

/**
 * Delete task status command class
 */
class DeleteTaskStatusCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('task-status:delete')
            ->setDescription('Remove task status')
            ->setHelp("This command remove task status")
            ->addArgument('id', InputArgument::REQUIRED, 'The task status id.')
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $id = $input->getArgument('id');
        $taskStatusService = $this->app['task_status_service'];

        $taskStatus = $taskStatusService->get($id);

        if (!$taskStatus) {
            $output->writeln('<error>Task status not find</error>');
            return;
        }

        $output->writeln(sprintf('id: %s', $taskStatus->id));
        $output->writeln(sprintf('name: %s', $taskStatus->name));

        $helper = $this->getHelper('question');
        $question = new ConfirmationQuestion('delete task status?(y/n): ', false);

        if (!$helper->ask($input, $output, $question)) {
            return;
        }

        $taskStatusService->delete($id);

        $output->writeln('<info>task status successfully deleted!</info>');
    }
}
