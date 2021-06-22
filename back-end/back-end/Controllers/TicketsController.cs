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
    [Route("api/tickets")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "EsAdmin")]
    public class TicketsController: ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public TicketsController(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<TicketsDTO>>> Get([FromQuery] PaginacionDTO paginacionDTO)
        {
            var queryable = context.Tickets.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            var tickets = await queryable.OrderBy(x => x.origen).Paginar(paginacionDTO).ToListAsync();
            return mapper.Map<List<TicketsDTO>>(tickets);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<TicketsDTO>> Get(int Id)
        {
            var ticket = await context.Rutas.FirstOrDefaultAsync(x => x.Id == Id);

            if (ticket == null)
            {
                return NotFound();
            }

            return mapper.Map<TicketsDTO>(ticket);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] TicketsCreacionDTO ticketsCreacionDTO)
        {
            var ticket = mapper.Map<Ticket>(ticketsCreacionDTO);
            context.Add(ticket);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{Id:int}")]
        public async Task<ActionResult> Put(int Id, [FromBody] TicketsCreacionDTO ticketsCreacionDTO)
        {
            var ticket = await context.Tickets.FirstOrDefaultAsync(x => x.Id == Id);

            if (ticket == null)
            {
                return NotFound();
            }

            ticket = mapper.Map(ticketsCreacionDTO, ticket);

            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{Id:int}")]
        public async Task<ActionResult> Delete(int Id)
        {
            var existe = await context.Tickets.AnyAsync(x => x.Id == Id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Ticket() { Id = Id });
            await context.SaveChangesAsync();
            return NoContent();
        }

    }
}
