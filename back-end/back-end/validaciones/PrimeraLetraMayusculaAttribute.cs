using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.validaciones
{
    public class PrimeraLetraMayusculaAttribute: ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value==null || string.IsNullOrEmpty(value.ToString()))
            {
                return ValidationResult.Success;
            }
            var primeraletra = value.ToString()[0].ToString();
            if(primeraletra!=primeraletra.ToUpper())
            {
                return new ValidationResult("la primera letra debe de ser mayuscula");
            }
            return ValidationResult.Success;
        }
    }
}
