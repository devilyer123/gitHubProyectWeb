using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class RutasDTO
    {
        public int Id { get; set; }
        public int origenId { get; set; }
        public int destinoId { get; set; }
        public int porcentaje { get; set; }
        public int duraViaAprox { get; set; }
    }
}
