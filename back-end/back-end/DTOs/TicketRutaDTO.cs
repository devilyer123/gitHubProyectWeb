using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class TicketRutaDTO
    {
        public int Id { get; set; }
        public string origen { get; set; }
        public string destino { get; set; }
        public int costoRuta { get; set; }
        public int duraViaAprox { get; set; }
    }
}
