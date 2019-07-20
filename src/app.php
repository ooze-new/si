<?php

use Silex\Application;
use Silex\Provider\AssetServiceProvider;
use Silex\Provider\TwigServiceProvider;
use Silex\Provider\ServiceControllerServiceProvider;
use Silex\Provider\HttpFragmentServiceProvider;

use Entity\User;
use Entity\TaskStatus;
use Entity\TaskPriority;

use Services\UserService;
use Services\ApiResponse;
use Services\AuthService;
use Services\TaskStatusService;
use Services\TaskPriorityService;

$app = new Application();
$app->register(new ServiceControllerServiceProvider());
$app->register(new AssetServiceProvider());
$app->register(new TwigServiceProvider());
$app->register(new HttpFragmentServiceProvider());
$app['twig'] = $app->extend('twig', function ($twig, $app) {
    // add custom globals, filters, tags, ...

    return $twig;
});

$app['user_service'] = function ($app) {
    return new UserService($app['db']);
};

$app['task_status_service'] = function ($app) {
    return new TaskStatusService($app['db']);
};

$app['task_priority_service'] = function ($app) {
    return new TaskPriorityService($app['db']);
};

$app['api_response'] = function ($app) {
    return new ApiResponse($app);
};

$app['auth_service'] = function () {
    return new AuthService();
};

$app->register(new Silex\Provider\MonologServiceProvider(), array(
    'monolog.logfile' => __DIR__.'/../var/logs/development.log',
));

User::setApp($app);
TaskStatus::setApp($app);
TaskPriority::setApp($app);

return $app;
