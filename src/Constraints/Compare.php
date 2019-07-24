<?php
namespace Constraints;

use Symfony\Component\Validator\Constraint;

class Compare extends Constraint
{
    public $field;

    public $message = '{{ field }} not equal {{ compared_field }}.';

    public function __construct($field)
    {
        $this->field = $field;
    }
}
