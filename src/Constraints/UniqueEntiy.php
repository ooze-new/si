<?php
namespace Constraints;

use Symfony\Component\Validator\Constraint;

class UniqueEntiy extends Constraint
{
    public $rule;

    public $message = '{{ value }} is not unique.';

    public function __construct($rule)
    {
        $this->rule = $rule;
    }
}
