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
 * Delete tag command class
 */
class DeleteTagCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('tag:delete')
            ->setDescription('Remove tag')
            ->setHelp("This command remove tag")
            ->addArgument('id', InputArgument::REQUIRED, 'The tag id.')
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $id = $input->getArgument('id');
        $tagService = $this->app['tag_service'];

        $tag = $tagService->get($id);

        if (!$tag) {
            $output->writeln('<error>Tag not find</error>');
            return;
        }

        $output->writeln(sprintf('id: %s', $tag->id));
        $output->writeln(sprintf('name: %s', $tag->name));

        $helper = $this->getHelper('question');
        $question = new ConfirmationQuestion('delete tag?(y/n): ', false);

        if (!$helper->ask($input, $output, $question)) {
            return;
        }

        $tagService->delete($id);

        $output->writeln('<info>tag successfully deleted!</info>');
    }
}
