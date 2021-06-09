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
    [ApiController]
    [Route("api/horarios")]
    public class HorariosController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public HorariosController(ApplicationDbContext context ,IMapper maper)
        {
            this.context = context;
            this.mapper = maper;
        }

        [HttpGet]
        public async Task<ActionResult<List<HorariosDTO>>> Get([FromQuery] PaginacionDTO paginacionDTO)
        {
            var queryable = context.Horarios.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            var horarios = await queryable.OrderBy(x => x.horasalida).Paginar(paginacionDTO).ToListAsync();
            return mapper.Map<List<HorariosDTO>>(horarios);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<HorariosDTO>> Get(int Id)
        {
            var horario = await context.Horarios.FirstOrDefaultAsync(x => x.Id == Id);

            if (horario == null)
            {
                return NotFound();
            }

            return mapper.Map<HorariosDTO>(horario);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromForm] HorariosCreacionDTO horariosCreacionDTO )
        {
            var horarios = mapper.Map<Horarios>(horariosCreacionDTO);
            context.Add(horarios);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{Id:int}")]
        public async Task<ActionResult> Put(int Id, [FromBody] HorariosCreacionDTO horariosCreacionDTO)
        {
            var horario = await context.Horarios.FirstOrDefaultAsync(x => x.Id == Id);

            if (horario == null)
            {
                return NotFound();
            }

            horario = mapper.Map(horariosCreacionDTO, horario);

            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{Id:int}")]
        public async Task<ActionResult> Delete(int Id)
        {
            var existe = await context.Horarios.AnyAsync(x => x.Id == Id);

            if (!existe)
            {
                return NotFound();
            }
            context.Remove(new Horarios() { Id = Id });
            await context.SaveChangesAsync();
            return NoContent();
        }

    }
}
