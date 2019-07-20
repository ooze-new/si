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
 * Create task status command class
 */
class CreateTaskStatusCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('task-status:create')
            ->setDescription('Create task status')
            ->setHelp("This command create a new task status")
            ->addArgument('name', InputArgument::REQUIRED, 'The task status name.')
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $taskStatus = TaskStatus::fromObject((object) [
            'name' => $input->getArgument('name'),
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
            $question = new ConfirmationQuestion('Create task status?(y/n): ', false);
    
            $output->writeln(sprintf('name: %s', $taskStatus->name));

            if (!$helper->ask($input, $output, $question)) {
                return;
            }

            $taskStatusService = $this->app['task_status_service'];
            $taskStatusService->create($taskStatus);

            $output->writeln('<info>task status successfully created!</info>');
        }
    }
}
