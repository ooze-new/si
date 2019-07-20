<?php
namespace Controllers;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Firebase\JWT\JWT;
use Controllers\BaseController;
use Entity\User;
use Entity\Registration;
use Entity\Authentication;

/**
 * User controller class
 */
class UserController extends BaseController
{
    /**
     * User registration action
     *
     * @param Silex\Application $app
     * @param Symfony\Component\HttpFoundation\Request $request
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function registration(Application $app, Request $request)
    {
        $user = Registration::fromObject((object) [
            'email' => $request->get('email', ''),
            'password' => $request->get('password', ''),
            'confirmPassword' => $request->get('confirmPassword', ''),
        ]);

        $errors = $app['validator']->validate($user);

        if ($errors->count() > 0) {
            return $app['api_response']->Error($errors, 400);
        }

        $app['user_service']->create(User::fromObject($user));

        return $app['api_response']->Response($user);
    }

    /**
     * Usaer authentication action
     *
     * @param Silex\Application $app
     * @param Symfony\Component\HttpFoundation\Request $request
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function login(Application $app, Request $request)
    {
        $authentication = Authentication::fromObject((object) [
            'email' => $request->get('email', ''),
            'password' => $request->get('password', '')
        ]);

        $errors = $app['validator']->validate($authentication);

        if ($errors->count() > 0) {
            return $app['api_response']->Error($errors, 400);
        }

        $user = $app['user_service']->getByEmailAndPassword(
            $authentication->email,
            $authentication->password
        );

        if (!$user) {
            return $app['api_response']->Error('user not exists', 404);
        }

        $jsonObject = [
            // Registered Claims
            "iss" => "OOze", // Claiming Issure
            "aud" => "https://github.com/ooze-new/is ", // Intended Audience
            "iat" => time(), // Issued At Time
            "nbf" => time(), // Not Before Time
            "exp" => time() + 86400, // Expiration Time (24 hours)
            // Public Claims
            "payload" => [
                'id' => $user->id,
                'email' => $user->email,
            ]
        ];

        $jsonWebToken = JWT::encode($jsonObject, $app['jwt.secret-key']);

        return $app['api_response']->Response($jsonWebToken);
    }

    /**
     * Usaer authentication action
     *
     * @param Silex\Application $app
     * @param Symfony\Component\HttpFoundation\Request $request
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function isUniqueEmail(Application $app, Request $request)
    {
        $isUniqueEmail = $app['user_service']->isUniqueEmail($request->get('email', ''));

        return $app['api_response']->Response($jsonWebToken);
    }
}
