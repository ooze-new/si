<?php
namespace Controllers;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Controllers\BaseController;

/**
 * Tag controller class
 */
class TagController extends BaseController
{
    /**
     * Usaer authentication action
     *
     * @param Silex\Application $app
     * @param Symfony\Component\HttpFoundation\Request $request
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function lookup(Application $app, Request $request)
    {
        $result = $app['tag_service']->lookup(
            $request->get('name', ''),
            10
        );

        return $app['api_response']->Response($result);
    }
}