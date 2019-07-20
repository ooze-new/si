<?php
namespace Entity;

use Silex\Application;

abstract class AbstractEntity
{
    /**
     * @var Silex\Application
     */
    static protected $app;

    /**
     * Set application
     *
     * @param Silex\Application $app
     * @return void
     */
    static public function setApp(Application $app) 
    {
        self::$app = $app;
    }

    /**
     * Create instance from object
     *
     * @param \stdClass $value
     * @return self
     */
    static public function fromObject(\stdClass $value): self
    {
        $instance =  new static();

        foreach (array_keys(get_object_vars($instance)) as $property) {
            if (!isset($value->$property)) {
                continue;
            }

            $instance->$property = $value->$property;
        }

        return $instance;
    }
}
