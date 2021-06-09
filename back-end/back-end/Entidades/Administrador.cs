using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Entidades
{
    public class Administrador
    {
        public int Id { get; set; }
        [Required]
        [StringLength(maximumLength: 200)]
        public string nombreUsuario { get; set; }
        public string contraseña { get; set; }
        [EmailAddress]
        public string correo { get; set; }
        public DateTime fechaHabilitacion { get; set; }
        //public bool habilitado { get; set; }
        public string foto { get; set; }
    }
}
