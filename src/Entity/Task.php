<?php
namespace Entity;

use Symfony\Component\Validator\Mapping\ClassMetadata;
use Symfony\Component\Validator\Constraints as Assert;
use Entity\AbstractEntity;

class Task extends AbstractEntity
{
    /**
     * @var string
     */
    public $id;

    /**
     * @var string
     */
    public $userId;

    /**
     * @var string
     */
    public $user = '';

    /**
     * @var string
     */
    public $statusId;

    /**
     * @var string
     */
    public $status = '';

    /**
     * @var string
     */
    public $priorityId;

    /**
     * @var string
     */
    public $priority = '';

    /**
     * @var string
     */
    public $name;

    /**
     * @var array
     */
    public $tags = [];

    /**
     * Set object validation rules
     *
     * @param Symfony\Component\Validator\Mapping\ClassMetadata $metadata
     * @return void
     */
    static public function loadValidatorMetadata(ClassMetadata $metadata)
    {
        $metadata->addPropertyConstraints('userId', [
            new Assert\NotBlank(),
        ]);

        $metadata->addPropertyConstraints('statusId', [
            new Assert\NotBlank(),
        ]);

        $metadata->addPropertyConstraints('priorityId', [
            new Assert\NotBlank(),
        ]);

        $metadata->addPropertyConstraints('name', [
                new Assert\NotBlank(),
        ]);

        $metadata->addPropertyConstraint('tags', new Assert\Type([
            'type' => 'array'
        ]));
    }
}
