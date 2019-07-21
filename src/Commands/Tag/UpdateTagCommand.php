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
 * Update tag command class
 */
class UpdateTagCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('tag:update')
            ->setDescription('Update tag')
            ->setHelp("This command update tag")
            ->addArgument('id', InputArgument::REQUIRED, 'The tag id.')
            ->addArgument('name', InputArgument::REQUIRED, 'The tag name.')
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $tag = Tag::fromObject((object) [
            'id' => $input->getArgument('id'),
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
            $question = new ConfirmationQuestion('Update tag?(y/n): ', false);
    
            $output->writeln(sprintf('id: %s', $tag->id));
            $output->writeln(sprintf('name: %s', $tag->name));

            if (!$helper->ask($input, $output, $question)) {
                return;
            }

            $tagService = $this->app['tag_service'];
            $tagService->update($tag);

            $output->writeln('<info>tag successfully updated!</info>');
        }
    }
}
