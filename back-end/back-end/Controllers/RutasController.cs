using AutoMapper;
using back_end.DTOs;
using back_end.Entidades;
using back_end.Utilidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/rutas")]
    [ApiController]

    public class RutasController: ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public RutasController(ApplicationDbContext context,IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<RutasDTO>>> Get([FromQuery] PaginacionDTO paginacionDTO)
        {
            var queryable = context.Rutas.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            var rutas = await queryable.OrderBy(x => x.origenId).Paginar(paginacionDTO).ToListAsync();
            return mapper.Map<List<RutasDTO>>(rutas);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<RutasDTO>> Get(int Id)
        {
            var ruta = await context.Rutas.FirstOrDefaultAsync(x => x.Id == Id);

            if (ruta == null)
            {
                return NotFound();
            }

            return mapper.Map<RutasDTO>(ruta);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] RutasCreacionDTO rutasCreacionDTO)
        {
            var ruta = mapper.Map<Ruta>(rutasCreacionDTO);
            context.Add(ruta);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{Id:int}")]
        public async Task<ActionResult> Put(int Id, [FromBody] RutasCreacionDTO rutasCreacionDTO)
        {
            var ruta = await context.Rutas.FirstOrDefaultAsync(x => x.Id == Id);

            if (ruta == null)
            {
                return NotFound();
            }

            ruta = mapper.Map(rutasCreacionDTO, ruta);

            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{Id:int}")]
        public async Task<ActionResult> Delete(int Id)
        {
            var existe = await context.Rutas.AnyAsync(x => x.Id == Id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Ruta() { Id = Id });
            await context.SaveChangesAsync();
            return NoContent();
        }

    }
}
