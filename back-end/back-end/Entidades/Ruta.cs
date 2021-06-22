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
        public string origen { get; set; }
        public string destino { get; set; }
        public int costoRuta { get; set; }
        public int duraViaAprox { get; set; }
        //public List<TicketsRutas> TicketsRutas { get; set; }
    }
}
