using AutoMapper;
using back_end.DTOs;
using back_end.Entidades;
using back_end.Utilidades;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/administradores")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "EsAdmin")]
    public class AdministradoresController: ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IAlmacenadorArchivos almacenadorArchivos;
        private readonly string contenedor = "administradores";

        public AdministradoresController(ApplicationDbContext context,
            IMapper mapper,
            IAlmacenadorArchivos almacenadorArchivos)
        {
            this.context = context;
            this.mapper = mapper;
            this.almacenadorArchivos = almacenadorArchivos;
        }

        [HttpGet]
        public async Task<ActionResult<List<AdministradorDTO>>> Get([FromQuery] PaginacionDTO paginacionDTO)
        {
            var queryable = context.Administradores.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            var administradores = await queryable.OrderBy(x => x.nombreUsuario).Paginar(paginacionDTO).ToListAsync();
            return mapper.Map<List<AdministradorDTO>>(administradores);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<AdministradorDTO>> Get(int id)
        {
            var administrador = await context.Administradores.FirstOrDefaultAsync(x => x.Id == id);
        
            if (administrador == null)
            {
                return NotFound();
            }
            return mapper.Map<AdministradorDTO>(administrador);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromForm] AdministradorCreacionDTO administradorCreacionDTO)
        {
            var administrador = mapper.Map<Administrador>(administradorCreacionDTO);
            if(administradorCreacionDTO.foto != null)
              {
                administrador.foto = await almacenadorArchivos.GuardarArchivo(contenedor, administradorCreacionDTO.foto);
            
            }

            context.Add(administrador);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromForm] AdministradorCreacionDTO administradorCreacionDTO)
        {
            var administrador = await context.Administradores.FirstOrDefaultAsync(x => x.Id == id);

            if(administrador == null)
            {
                return NotFound();
            }

            administrador = mapper.Map(administradorCreacionDTO, administrador);
            if (administradorCreacionDTO.foto != null)
            {
                administrador.foto = await almacenadorArchivos.EditarArchivo(contenedor, administradorCreacionDTO.foto, administrador.foto);
            }

            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var administrador = await context.Administradores.FirstOrDefaultAsync(x => x.Id == id);

            if (administrador == null)
            {
                return NotFound();
            }

            context.Remove(administrador);
            await context.SaveChangesAsync();

            await almacenadorArchivos.BorrarArchivo(administrador.foto, contenedor);

            return NoContent();
        }
    }
}
