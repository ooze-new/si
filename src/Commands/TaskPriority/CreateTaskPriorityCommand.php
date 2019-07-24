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
 * Create task priority command class
 */
class CreateTaskPriorityCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('task-priority:create')
            ->setDescription('Create task priority')
            ->setHelp("This command create a new task priority")
            ->addArgument('name', InputArgument::REQUIRED, 'The task priority name.')
            ->addArgument('order-index', InputArgument::REQUIRED, 'The task priority order index.')
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $taskPriority = TaskPriority::fromObject((object) [
            'name' => $input->getArgument('name'),
            'orderIndex' => $input->getArgument('order-index'),
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
            $question = new ConfirmationQuestion('Create task priority?(y/n): ', false);
    
            $output->writeln(sprintf('name: %s', $taskPriority->name));
            $output->writeln(sprintf('order index: %s', $taskPriority->orderIndex));

            if (!$helper->ask($input, $output, $question)) {
                return;
            }

            $taskPriorityService = $this->app['task_priority_service'];
            $taskPriorityService->create($taskPriority);

            $output->writeln('<info>task priority successfully created!</info>');
        }
    }
}
