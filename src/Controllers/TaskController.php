<?php
namespace Controllers;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Controllers\BaseController;
use Entity\Task;

/**
 * Task controller class
 */
class TaskController extends BaseController
{
    /**
     * Task list action
     *
     * @param Silex\Application $app
     * @param Symfony\Component\HttpFoundation\Request $request
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function list(Application $app, Request $request)
    {
        $user = $app['auth_service']->getUser();
        $offset = $request->get('offset', 0);

        $result = $app['task_service']->list(
            $user->id,
            $request->get('status_id', ''),
            $request->get('priority_id', ''),
            (int) $offset,
            20
        );

        return $app['api_response']->Response($result);
    }

    /**
     * Get task action
     *
     * @param Silex\Application $app
     * @param Symfony\Component\HttpFoundation\Request $request
     * @param string $id
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function get(Application $app, Request $request, string $id)
    {
        $user = $app['auth_service']->getUser();

        $result = $app['task_service']->get($id, $user->id);

        if (!$result) {
            return $app['api_response']->Error('task not exists', 401);
        }

        return $app['api_response']->Response($result);
    }

    /**
     * Create task action
     *
     * @param Silex\Application $app
     * @param Symfony\Component\HttpFoundation\Request $request
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function create(Application $app, Request $request)
    {
        $user = $app['auth_service']->getUser();

        $task = Task::fromObject((object) [
            'userId' => $user->id,
            'statusId' => $request->get('status_id', ''),
            'priorityId' => $request->get('priority_id', ''),
            'name' => $request->get('name', ''),
            'tags' => $this->getTagsFromRequest($request)
        ]);

        $errors = $app['validator']->validate($task);

        if ($errors->count() > 0) {
            return $app['api_response']->Error($errors, 400);
        }

        $taskId = $app['task_service']->create($task);

        return $app['api_response']->Response(
            $app['task_service']->get($taskId, $user->id)
        );
    }

    /**
     * Update task action
     *
     * @param Silex\Application $app
     * @param Symfony\Component\HttpFoundation\Request $request
     * @param string $id
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function update(Application $app, Request $request, string $id)
    {
        $user = $app['auth_service']->getUser();

        $task = Task::fromObject((object) [
            'id' => $id,
            'userId' => $user->id,
            'statusId' => $request->get('status_id', ''),
            'priorityId' => $request->get('priority_id', ''),
            'name' => $request->get('name', ''),
            'tags' => $this->getTagsFromRequest($request)
        ]);

        $errors = $app['validator']->validate($task);

        if ($errors->count() > 0) {
            return $app['api_response']->Error($errors, 400);
        }

        $taskId = $app['task_service']->update($task);

        return $app['api_response']->Response(
            $app['task_service']->get($taskId, $user->id)
        );
    }

    /**
     * Delete task action
     *
     * @param Silex\Application $app
     * @param Symfony\Component\HttpFoundation\Request $request
     * @param string $id
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function delete(Application $app, Request $request, string $id)
    {
        $user = $app['auth_service']->getUser();

        $result = $app['task_service']->delete($id, $user->id);

        return $app['api_response']->Response('deleted');
    }

    /**
     * Get tags from http request
     *
     * @param Request $request
     * @return mixed
     */
    private function getTagsFromRequest(Request $request)
    {
        $tags = $request->get('tags', []);

        if (!is_array($tags)) {
            return $tags;
        }

        if (!$tags) {
            return [];
        }

        return array_map(
            function ($tag) {
               return (object) [
                    'id' => $tag
               ];
            },
            $tags
        );
    }
}

