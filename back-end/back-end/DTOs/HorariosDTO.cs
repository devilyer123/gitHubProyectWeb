using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class HorariosDTO
    {
        public int Id { get; set; }
        public int horasalida { get; set; }
        public int minutossalida { get; set; }
    }
}
