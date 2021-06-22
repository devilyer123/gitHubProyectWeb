using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Entidades
{
    public class Ticket
    {
        public int Id { get; set; }
        public string origen { get; set; }
        public string destino { get; set; }
        public string tipoBus { get; set; }
        [Required]
        public DateTime fechaSalida { get; set; }
        public int horaSalida { get; set; }
        public int horaLlegada { get; set; }
        public int costoTicket { get; set; }
        /*public List<TicketsRutas> TicketsRutas { get; set; }
        public List<TicketsBuses> TicketsBuses { get; set; }
        public List<TicketsHorarios> TicketsHorarios { get; set; }*/
    }
}
