<?php
namespace Constraints;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;

class UniqueEntiyValidator extends ConstraintValidator
{
    public function validate($value, Constraint $constraint)
    {
        if (!$constraint instanceof UniqueEntiy) {
            throw new UnexpectedTypeException($constraint, __NAMESPACE__.'\UniqueEntiy');
        }

        if (!is_callable($constraint->rule)) {
            throw new \Exception('rule not callable');
        }

        $isUnique = call_user_func($constraint->rule, $value);

        if (!$isUnique) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ value }}', $this->formatValue($value))
                ->addViolation();
        }
    }
}
