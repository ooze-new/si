<?php
namespace Entity;

use Symfony\Component\Validator\Mapping\ClassMetadata;
use Symfony\Component\Validator\Constraints as Assert;
use Constraints\UniqueEntiy;
use Entity\AbstractEntity;

class Authentication extends AbstractEntity
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
    }
}
