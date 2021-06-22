using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class BusDTO
    {
        public int Id { get; set; }
        public string tipoBus { get; set; }
        public int capBus { get; set; }
        public int costoAsiento { get; set; }
    }
}
