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
 * Update task priority command class
 */
class UpdateTaskPriorityCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('task-priority:update')
            ->setDescription('Update task priority')
            ->setHelp("This command update task priority")
            ->addArgument('id', InputArgument::REQUIRED, 'The task priority id.')
            ->addArgument('name', InputArgument::REQUIRED, 'The task priority name.')
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $taskPriority = TaskPriority::fromObject((object) [
            'id' => $input->getArgument('id'),
            'name' => $input->getArgument('name'),
        ]);

        $errors = $this->app['validator']->validate($taskPriority);

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
            $question = new ConfirmationQuestion('Update task priority?(y/n): ', false);
    
            $output->writeln(sprintf('id: %s', $taskPriority->id));
            $output->writeln(sprintf('name: %s', $taskPriority->name));

            if (!$helper->ask($input, $output, $question)) {
                return;
            }

            $taskPriorityService = $this->app['task_priority_service'];
            $taskPriorityService->update($taskPriority);

            $output->writeln('<info>task priority successfully updated!</info>');
        }
    }
}
