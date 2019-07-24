<?php
namespace Commands\Tag;

use Commands\AbstractAppCommand;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\ConfirmationQuestion;

use Entity\Tag;

/**
 * Create tag command class
 */
class CreateTagCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('tag:create')
            ->setDescription('Create tag')
            ->setHelp("This command create a new tag")
            ->addArgument('name', InputArgument::REQUIRED, 'The tag name.')
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $tag = Tag::fromObject((object) [
            'name' => $input->getArgument('name'),
        ]);

        $errors = $this->app['validator']->validate($tag);

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
            $question = new ConfirmationQuestion('Create tag?(y/n): ', false);
    
            $output->writeln(sprintf('name: %s', $tag->name));

            if (!$helper->ask($input, $output, $question)) {
                return;
            }

            $tagService = $this->app['tag_service'];
            $tagService->create($tag);

            $output->writeln('<info>tag successfully created!</info>');
        }
    }
}
