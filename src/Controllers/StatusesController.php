<?php
namespace Controllers;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Controllers\BaseController;

/**
 * Statuse controller class
 */
class StatusesController extends BaseController
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
        $result = $app['task_status_service']->list();

        return $app['api_response']->Response($result);
    }
}
