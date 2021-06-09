using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Entidades
{
    public class Ruta
    {
        public int Id { get; set; }
        [Required]
        public int origenId { get; set; }
        public int destinoId { get; set; }
        public int porcentaje { get; set; }
        public int duraViaAprox { get; set; }




    }
}
