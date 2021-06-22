using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class HorariosCreacionDTO
    {
        [Required]
        [Range(0 , 24)]
        public int horaSalida { get; set; }
        [Range(0 , 60)]
        public int minutoSalida { get; set; }
    }
}
