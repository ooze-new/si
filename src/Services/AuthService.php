<?php
namespace Services;

use Entity\User;

/**
 * Authentication service class
 */
class AuthService
{
    /**
     * @var Entity\User
     */
    private $user = null;

    /**
     * Set user
     *
     * @param User $user
     * @return void
     */
    public function setUset(User $user)
    {
        $this->user = $user;
    }

    /**
     * Get user
     *
     * @return Entity\User
     */
    public function getUser(): ?User
    {
        return $this->user;
    }

    /**
     * Get authentication status
     *
     * @return boolean
     */
    public function isAuth(): bool
    {
        return ($this->user instanceof User) ? true : false;
    }
}
