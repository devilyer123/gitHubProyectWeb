using back_end.Utilidades;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class TicketsCreacionDTO
    {
        public string origen { get; set; }
        public string destino { get; set; }
        public string tipoBus { get; set; }
        public DateTime fechaSalida { get; set; }
        public int horaSalida { get; set; }
        public int horaLlegada { get; set; }
        public int costoTicket { get; set; }
        /*[ModelBinder(BinderType = typeof(TypeBinder<List<int>>))]
        public List<int> BusesIds { get; set; }
        [ModelBinder(BinderType = typeof(TypeBinder<List<int>>))]
        public List<int> HorariosIds { get; set; }
        [ModelBinder(BinderType = typeof(TypeBinder<List<int>>))]
        public List<int> RutasIds { get; set; }*/
    }
}
