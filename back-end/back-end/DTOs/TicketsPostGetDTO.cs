using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class TicketsPostGetDTO
    {
        public List<RutasDTO> Rutas { get; set; }
        public List<BusDTO> Buses { get; set; }
        public List<HorariosDTO> Horarios { get; set; }
    }
}
