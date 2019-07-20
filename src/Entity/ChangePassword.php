<?php
namespace Entity;

use Symfony\Component\Validator\Mapping\ClassMetadata;
use Symfony\Component\Validator\Constraints as Assert;
use Constraints\UniqueEntiy;
use Constraints\Compare;
use Entity\AbstractEntity;

class ChangePassword extends AbstractEntity
{
    /**
     * @var string
     */
    public $email;

    /**
     * @var string
     */
    public $password;

    /**
     * @var string
     */
    public $confirmPassword;

    /**
     * Set object validation rules
     *
     * @param Symfony\Component\Validator\Mapping\ClassMetadata $metadata
     * @return void
     */
    static public function loadValidatorMetadata(ClassMetadata $metadata)
    {
        $metadata->addPropertyConstraints('email', [
                new Assert\NotBlank(),
                new Assert\Email(),
        ]);

        $metadata->addPropertyConstraints('password', [
            new Assert\NotBlank(),
        ]);

        $metadata->addPropertyConstraints('confirmPassword', [
            new Assert\NotBlank(),
            new Compare('password'),
        ]);
    }
}
