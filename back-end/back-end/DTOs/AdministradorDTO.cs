using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class AdministradorDTO
    {
        public int Id { get; set; }
        public string nombreUsuario { get; set; }
        public string contraseña { get; set; }
        public string correo { get; set; }
        public DateTime fechaHabilitacion { get; set; }
        //public bool habilitado { get; set; }
        public string foto { get; set; }
    }
}
