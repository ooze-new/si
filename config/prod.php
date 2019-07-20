<?php

use Silex\Provider\DoctrineServiceProvider;
use Silex\Provider\ValidatorServiceProvider;

function getenvOrDefault(string $name, $default = null)
{
    $value = getenv($name);

    return ($value) ? $value : $default;
}

// configure your app for the production environment

$app['twig.path'] = array(__DIR__.'/../templates');
$app['twig.options'] = array('cache' => __DIR__.'/../var/cache/twig');
$app['jwt.secret-key'] = getenvOrDefault('JWT_SECRET_KEY', '123456789');

$app->register(new ValidatorServiceProvider());
$app->register(new DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'    => 'pdo_mysql',
        'host'      => getenvOrDefault('APP_DB_HOST', '127.0.0.1'),
        'dbname'    => getenvOrDefault('APP_DB_DATABASE', 'searchinform_silex'),
        'user'      => getenvOrDefault('APP_DB_USER', 'searchinform'),
        'password'  => getenvOrDefault('APP_PASSWORD', '8aJO4ejI7AxI'),
        'charset'   => 'utf8',
    ),
));
