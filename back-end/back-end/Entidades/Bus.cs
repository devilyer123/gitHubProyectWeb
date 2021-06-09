using back_end.validaciones;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Entidades
{
    public class Bus
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "El campo {0} es requerido")]
        public int tipoBusId { get; set; }
        //[StringLength(maximumLength: 2)]
        [Range(30, 100)]
        public int capBus { get; set; }
        [Range(30, 150)]
        public int costoAsiento { get; set; }
       



    }
}
