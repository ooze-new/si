<?php
namespace Commands;

use Commands\AbstractAppCommand;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\ConfirmationQuestion;

use Entity\ChangePassword;
use Entity\User;

/**
 * Change user password command class
 */
class ChangePasswordCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('users:change-password')
            ->setDescription('Change user password')
            ->setHelp("This command change user password")
            ->addArgument('email', InputArgument::REQUIRED, 'The email of the user.')
            ->addArgument('password', InputArgument::REQUIRED, 'The password of the user.')
            ->addArgument('confirm-password', InputArgument::REQUIRED, 'The confirm password of the user.')
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $changePassword = ChangePassword::fromObject((object) [
            'email' => $input->getArgument('email'),
            'password' => $input->getArgument('password'),
            'confirmPassword' => $input->getArgument('confirm-password'),
        ]);

        $errors = $this->app['validator']->validate($changePassword);

        if (count($errors) > 0) {
            foreach ($errors as $error) {
                $output->writeln(sprintf(
                    '<error>%s %s</error>',
                    $error->getPropertyPath(),
                    $error->getMessage()
                ));
            }
        } else {
            $userService = $this->app['user_service'];

            $user = $userService->getByEmail($changePassword->email);

            if (!$user) {
                $output->writeln('<error>User not find</error>');
                return;
            }

            $user->password = $changePassword->password;

            $helper = $this->getHelper('question');
            $question = new ConfirmationQuestion('Change user password?(y/n): ', false);
    
            $output->writeln(sprintf('Email: %s', $changePassword->email));
            $output->writeln(sprintf('Password %s', $changePassword->password));

            if (!$helper->ask($input, $output, $question)) {
                return;
            }

            $userService->update($user);

            $output->writeln('<info>Change password successfull!</info>');
        }
    }
}
