<?php
namespace Commands;

use Commands\AbstractAppCommand;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\ConfirmationQuestion;

use Entity\User;

/**
 * Create user command class
 */
class CreateUserCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('users:create')
            ->setDescription('Create new app user')
            ->setHelp("This command creates a new user")
            ->addArgument('email', InputArgument::REQUIRED, 'The email of the user.')
            ->addArgument('password', InputArgument::REQUIRED, 'The password of the user.')
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $user = User::fromObject((object) [
            'email' => $input->getArgument('email'),
            'password' => $input->getArgument('password')
        ]);

        $errors = $this->app['validator']->validate($user);

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
            $question = new ConfirmationQuestion('Create user?(y/n): ', false);
    
            $output->writeln(sprintf('Email: %s', $input->getArgument('email')));
            $output->writeln(sprintf('Password %s', $input->getArgument('password')));

            if (!$helper->ask($input, $output, $question)) {
                return;
            }

            $userService = $this->app['user_service'];
            $userService->create($user);

            $output->writeln('<info>User successfully generated!</info>');
        }
    }
}
