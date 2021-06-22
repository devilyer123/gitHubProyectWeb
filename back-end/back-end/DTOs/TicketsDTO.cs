using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class TicketsDTO
    {
        public int Id { get; set; }
        public string origen { get; set; }
        public string destino { get; set; }
        public string tipoBus { get; set; }
        public DateTime fechaSalida { get; set; }
        public int horaSalida { get; set; }
        public int horaLlegada { get; set; }
        public int costoTicket { get; set; }
    }
}
