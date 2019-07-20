<?php
namespace Commands;

use Silex\Application;
use Symfony\Component\Console\Command\Command;

/**
 * Base command class with silex application property
 */
abstract class AbstractAppCommand extends Command
{
    /**
     * @var Silex\Application
     */
    protected $app;

    /**
     * Constructor
     *
     * @param Silex\Application $app
     * @param string|null $name The name of the command; passing null means it must be set in configure()
     * @throws LogicException When the command name is empty
     */
    public function __construct(Application $app, $name = null)
    {
        parent::__construct($name);
        
        $this->app = $app;
    }
}
