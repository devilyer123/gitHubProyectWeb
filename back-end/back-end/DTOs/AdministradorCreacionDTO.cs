using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class AdministradorCreacionDTO
    {
        [Required]
        [StringLength(maximumLength: 200)]
        public string nombreUsuario { get; set; }
        public string contraseña { get; set; }
        [EmailAddress]
        public string correo { get; set; }
        public DateTime fechaHabilitacion { get; set; }
        //public bool habilitado { get; set; }
        public IFormFile foto { get; set; }
    }
}
