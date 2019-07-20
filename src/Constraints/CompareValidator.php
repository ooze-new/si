<?php
namespace Constraints;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;

class CompareValidator extends ConstraintValidator
{
    /**
     * {@inheritdoc}
     */
    public function validate($value, Constraint $constraint)
    {
        if (!$constraint instanceof Compare) {
            throw new UnexpectedTypeException($constraint, __NAMESPACE__.'\Compare');
        }

        $comparedValue = $this->context->getRoot()->{$constraint->field};

        if ($comparedValue != $value) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ field }}', $this->formatValue($constraint->field))
                ->setParameter('{{ compared_field }}', $this->formatValue($this->context->getPropertyPath()))
                ->addViolation();            
        }
    }
}
