<?php
namespace Commands\Tag;

use Commands\AbstractAppCommand;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Helper\Table;

use Entity\Tag;

/**
 * Tag list command class
 */
class TagListCommand extends AbstractAppCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('tag:list')
            ->setDescription('Tag list')
            ->setHelp("This command show tag list")
            ->addArgument('name', InputArgument::REQUIRED, 'The tag name.')
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $tagService = $this->app['tag_service'];
        $tagList = $tagService->lookup(
            $input->getArgument('name'),
            20
        );

        $table = new Table($output);

        $table
            ->setHeaders(array('id', 'name'))
        ;

        foreach ($tagList as $tag) {
            $table
                ->addRow([
                    $tag->id,
                    $tag->name,
                ])
            ;
        }

        $table->render();
    }
}
