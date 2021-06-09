using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class BusCreacionDTO
    {
        public int tipoBusId { get; set; }
        [Range(30, 100)]
        public int capBus { get; set; }
        [Range(30, 150)]
        public int costoAsiento { get; set; }
    }
}
