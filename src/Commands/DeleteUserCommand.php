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
 * Change user password command class
 */
class DeleteUserCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('users:delete')
            ->setDescription('Remove user')
            ->setHelp("This command remove user")
            ->addArgument('email', InputArgument::REQUIRED, 'The email of the user.')
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $email = $input->getArgument('email');
        $userService = $this->app['user_service'];

        $user = $userService->getByEmail($email);

        if (!$user) {
            $output->writeln('<error>User not find</error>');
            return;
        }

        $helper = $this->getHelper('question');
        $question = new ConfirmationQuestion('Remove user?(y/n): ', false);

        if (!$helper->ask($input, $output, $question)) {
            return;
        }

        $userService->delete($user->id);

        $output->writeln('<info>user removed!</info>');
    }
}
