<?php
namespace Services;

use Silex\Application;
use Symfony\Component\Validator\ConstraintViolationList;

/**
 * ApiResponse service class
 */
class ApiResponse
{
    /**
     * @var Silex\Application
     */
    protected $app;

    /**
     * Constructor
     *
     * @param Silex\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    /**
     * Convet errors for retun of response
     *
     * @param ConstraintViolationList $errors
     * @return array
     */
    protected function convertErrors(ConstraintViolationList $errors)
    {
        $errorList = [];

        foreach ($errors as $error) {
            if (!isset($errorList[$error->getPropertyPath()])) {
                $errorList[$error->getPropertyPath()] = [];
            }

            $errorName = implode('', array_slice(
                explode('\\', get_class($error->getConstraint())),
                -1
            ));
            $errorList[$error->getPropertyPath()][$errorName] = $error->getMessage();
        }

        return $errorList;
    }

    /**
     * Create error response
     *
     * @param Symfony\Component\Validator\ConstraintViolationList|string $errors
     * @param integer $code
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function Error($errors, $code = 500)
    {
        if ($errors instanceof ConstraintViolationList) {
            $errors = $this->convertErrors($errors);
        }

        return $this->app->json(
            (object) ['status' => 0, 'errors' => $errors],
            $code,
            ['Content-Type' => 'application/json; charset=utf-8']
        );
    }

    /**
     * Create success response
     *
     * @param any $data
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function Response($data)
    {
        return $this->app->json(
            (object) ['status' => 1, 'reswponse' => $data],
            200,
            ['Content-Type' => 'application/json; charset=utf-8']
        );
    }
}
