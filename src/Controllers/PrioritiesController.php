<?php
namespace Controllers;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Controllers\BaseController;

/**
 * Priorities controller class
 */
class PrioritiesController extends BaseController
{
    /**
     * Usaer authentication action
     *
     * @param Silex\Application $app
     * @param Symfony\Component\HttpFoundation\Request $request
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function list(Application $app, Request $request)
    {
        $result = $app['task_priority_service']->list();

        return $app['api_response']->Response($result);
    }
}
