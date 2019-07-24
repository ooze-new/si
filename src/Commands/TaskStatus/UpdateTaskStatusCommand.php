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
 * Update task status command class
 */
class UpdateTaskStatusCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('task-status:update')
            ->setDescription('Update task status')
            ->setHelp("This command update task status")
            ->addArgument('id', InputArgument::REQUIRED, 'The task status id.')
            ->addArgument('name', InputArgument::REQUIRED, 'The task status name.')
            ->addArgument('order-index', InputArgument::REQUIRED, 'The task status order index.')
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $taskStatus = TaskStatus::fromObject((object) [
            'id' => $input->getArgument('id'),
            'name' => $input->getArgument('name'),
            'orderIndex' => $input->getArgument('order-index'),
        ]);

        $errors = $this->app['validator']->validate($taskStatus);

        if (count($errors) > 0) {
            foreach ($errors as $error) {
                $output->writeln(sprintf(
                    '<error>%s %s</error>',
                    $error->getPropertyPath(),
                    $error->getMessage()
                ));
            }
        } else {
            $helper = $this->getHelper('question');
            $question = new ConfirmationQuestion('Update task status?(y/n): ', false);
    
            $output->writeln(sprintf('id: %s', $taskStatus->id));
            $output->writeln(sprintf('name: %s', $taskStatus->name));
            $output->writeln(sprintf('order index: %s', $taskStatus->orderIndex));

            if (!$helper->ask($input, $output, $question)) {
                return;
            }

            $taskStatusService = $this->app['task_status_service'];
            $taskStatusService->update($taskStatus);

            $output->writeln('<info>task status successfully updated!</info>');
        }
    }
}
