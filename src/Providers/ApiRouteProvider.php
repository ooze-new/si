<?php
namespace Providers;

use Silex\Application;
use Silex\Api\ControllerProviderInterface;
use Symfony\Component\HttpFoundation\Request;
use Firebase\JWT\JWT;
use Helpers\AuthorizationHeaderTokenExtractor;

/**
 * Api route provider class 
 */
class ApiRouteProvider implements ControllerProviderInterface
{
    /**
     * {@inheritdoc}
     */
    public function connect(Application $app)
    {
        $route = $app['controllers_factory'];   

        $before = function (Request $request) use ($app) {
            $userService = $app['user_service'];
            $apiResponse = $app['api_response'];
            $authService = $app['auth_service'];

            $extractor = new AuthorizationHeaderTokenExtractor('Bearer', 'X-AUTH-TOKEN');
            
            $token = $extractor->extract($request);

            try {
                $decodedToken = JWT::decode($token, $app['jwt.secret-key'], ['HS256']);
            } catch(\Exception $e) {
                return $apiResponse->Error('Unauthorized', 401);
            }

            $id = isset($decodedToken->payload->id)
                ? $decodedToken->payload->id
                : '';

            $user = $userService->get($id);

            if (!$user) {
                return $apiResponse->Error('Unauthorized', 401);
            }

            $authService->setUset($user);
        };

        $route->get('/test', function () use ($app)
        {
            $user = $app['auth_service']->getUser();

            echo '<pre>';
            var_dump($user);
            echo '</pre>';

            return 'ok';
        })->before($before);

        return $route;
    }
}
