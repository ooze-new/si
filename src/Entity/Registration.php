<?php
namespace Entity;

use Symfony\Component\Validator\Mapping\ClassMetadata;
use Symfony\Component\Validator\Constraints as Assert;
use Constraints\UniqueEntiy;
use Constraints\Compare;
use Entity\User;

class Registration extends User
{
    /**
     * @var string
     */
    public $confirmPassword;

    /**
     * {@inheritdoc}
     */
    static public function loadValidatorMetadata(ClassMetadata $metadata)
    {
        $metadata->addPropertyConstraint('password', new Assert\Length(['min' => 6]));

        $metadata->addPropertyConstraints('confirmPassword', [
            new Assert\NotBlank(),
            new Compare('password'),
        ]);
    }
}
