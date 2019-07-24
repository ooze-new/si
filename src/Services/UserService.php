<?php
namespace Services;

use Doctrine\DBAL\FetchMode;
use Entity\User;

/**
 * User repository class
 */
class UserService extends AbstractDbService
{
    /**
     * Get user list
     *
     * @return Entity\User[]
     */
    public function list()
    {
        $this->queryBuilder
            ->select('u.id, u.email, u.password')
            ->from('users', 'u')
        ;

        return $this->queryBuilder
            ->execute()
            ->fetchAll(
                FetchMode::CUSTOM_OBJECT,
                User::class
            )
        ;
    }

    /**
     * Get user by id
     *
     * @param string $id uuid4 user identificator
     * @return User|null
     */
    public function get(string $id): ?User
    {
        $this->queryBuilder
            ->select('u.id, u.email, u.password')
            ->from('users', 'u')
            ->where('u.id = :id')
            ->setParameter(':id', $id)
        ;

        $result = $this->queryBuilder
            ->execute()
            ->fetch(
                FetchMode::STANDARD_OBJECT
            );

        if (!$result) {
            return null;
        }

        return User::fromObject($result);
    }

    /**
     * Get user by email
     *
     * @param string $email
     * @return User|null
     */
    public function getByEmail(string $email): ?User
    {
        $this->queryBuilder
            ->select('u.id, u.email, u.password')
            ->from('users', 'u')
            ->where('u.email = :email')
            ->setParameter(':email', $email)
        ;

        $result = $this->queryBuilder
            ->execute()
            ->fetch(
                FetchMode::STANDARD_OBJECT
            );

        if (!$result) {
            return null;
        }

        return User::fromObject($result);
    }

    /**
     * Get user by email and password
     *
     * @param string $email
     * @param string $password
     * @return User|null
     */
    public function getByEmailAndPassword(string $email, string $password): ?User
    {
        $this->queryBuilder
            ->select('u.id, u.email, u.password')
            ->from('users', 'u')
            ->where('u.email = :email')
            ->setParameter(':email', $email)
        ;

        $result = $this->queryBuilder
            ->execute()
            ->fetch(
                FetchMode::STANDARD_OBJECT
            );

        if (!$result) {
            return null;
        }

        if (!password_verify($password, $result->password)) {
            return null;
        }

        return User::fromObject($result);
    }

    /**
     * Check email on unique
     *
     * @param string $email
     * @return boolean
     */
    public function isUniqueEmail(string $email): bool
    {
        $this->queryBuilder
            ->select('*')
            ->from('users', 'u')
            ->where('u.email = :email')
            ->setParameter(':email', $email)
        ;

        return !is_object(
            $this->queryBuilder->execute()->fetch(FetchMode::STANDARD_OBJECT)
        );
    }

    /**
     * Create user
     *
     * @param User $user
     * @return void
     */
    public function create(User $user)
    {
        $this->queryBuilder
            ->insert('users')
            ->values([
                'id' => ':id',
                'email' => ':email',
                'password' => ':password',
            ])
            ->setParameter(':id', $this->generateUuid())
            ->setParameter(':email', $user->email)
            ->setParameter(
                ':password',
                password_hash($user->password, PASSWORD_DEFAULT)
            )
        ;

        return $this->queryBuilder->execute();
    }

    /**
     * Update user
     *
     * @param User $user
     * @return void
     */
    public function update(User $user)
    {
        $this->queryBuilder
            ->update('users', 'u')
            ->set('u.password', 'password')
            ->where('u.id = :id')
            ->setParameter(':id', $user->id)
            ->setParameter(
                ':password',
                password_hash($user->password, PASSWORD_DEFAULT)
            )
        ;

        return $this->queryBuilder->execute();
    }

    /**
     * Delete user
     *
     * @param string $id
     * @return void
     */
    public function delete(string $id)
    {
        $this->queryBuilder
            ->delete('users')
            ->where('id = :id')
            ->setParameter(':id', $id)
        ;

        return $this->queryBuilder->execute();
    }
}

