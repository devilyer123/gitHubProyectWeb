using AutoMapper;
using back_end.DTOs;
using back_end.Entidades;
using back_end.Filtros;
using back_end.Utilidades;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/buses")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class BusesController: ControllerBase
    {
        private readonly ILogger<BusesController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public BusesController(
            ILogger<BusesController>logger,
            ApplicationDbContext context,
            IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet] // api/buses      
        public async Task<ActionResult<List<BusDTO>>> Get([FromQuery] PaginacionDTO paginacionDTO)
        {
            var queryable = context.Buses.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            var buses = await queryable.OrderBy(x => x.tipoBusId).Paginar(paginacionDTO).ToListAsync();
            return mapper.Map<List<BusDTO>>(buses);
        }        

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<BusDTO>> Get(int Id)
        {
            var bus = await context.Buses.FirstOrDefaultAsync(x => x.Id == Id);

            if (bus == null)
            {
                return NotFound();
            }

            return mapper.Map<BusDTO>(bus);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] BusCreacionDTO busCreacionDTO)
        {
            var bus = mapper.Map<Bus>(busCreacionDTO);
            context.Add(bus);
            await context.SaveChangesAsync();
            return NoContent();
        }
        
        [HttpPut("{Id:int}")]
        public async Task<ActionResult> Put(int Id, [FromBody] BusCreacionDTO busCreacionDTO)
        {
            var bus = await context.Buses.FirstOrDefaultAsync(x => x.Id == Id);

            if (bus == null)
            {
                return NotFound();
            }

            bus = mapper.Map(busCreacionDTO, bus);

            await context.SaveChangesAsync();
            return NoContent();
        }
        
        [HttpDelete("{Id:int}")]
        public async Task<ActionResult> Delete(int Id)
        {
            var existe = await context.Buses.AnyAsync(x => x.Id == Id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Bus() { Id = Id });
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
