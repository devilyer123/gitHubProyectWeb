using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Entidades
{
    public class Horarios
    {
        public int Id { get; set; }
        [Required]
        [Range(0 , 24)]
        public int horasalida { get; set; }
        [Range(0, 60)]
        public int minutossalida { get; set; }

    }
}
