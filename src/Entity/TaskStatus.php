<?php
namespace Entity;

use Symfony\Component\Validator\Mapping\ClassMetadata;
use Symfony\Component\Validator\Constraints as Assert;
use Entity\AbstractEntity;

class TaskStatus extends AbstractEntity
{
    /**
     * @var string
     */
    public $id;

    /**
     * @var string
     */
    public $name;

    /**
     * @var int
     */
    public $orderIndex;

    /**
     * Set object validation rules
     *
     * @param Symfony\Component\Validator\Mapping\ClassMetadata $metadata
     * @return void
     */
    static public function loadValidatorMetadata(ClassMetadata $metadata)
    {
        $metadata->addPropertyConstraints('name', [
                new Assert\NotBlank(),
        ]);
    }
}
