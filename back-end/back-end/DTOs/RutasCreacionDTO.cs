using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class RutasCreacionDTO
    {
        public int origenId { get; set; }
        public int destinoId { get; set; }
        //[Range(30, 150)]
        public int porcentaje { get; set; }
        //[Range(3, 18)]
        public int duraViaAprox { get; set; }
    }
}
