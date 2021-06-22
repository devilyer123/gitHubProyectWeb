using AutoMapper;
using back_end.DTOs;
using back_end.Entidades;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Utilidades
{
    public class AutoMapperProfiles: Profile 
    {
        public AutoMapperProfiles()
        {
            CreateMap<Bus, BusDTO>().ReverseMap();
            CreateMap<BusCreacionDTO, Bus>();
            CreateMap<Administrador, AdministradorDTO>().ReverseMap();
            CreateMap<AdministradorCreacionDTO, Administrador>()
                .ForMember(x => x.foto, options => options.Ignore());
            CreateMap<Horario, HorariosDTO>().ReverseMap();
            CreateMap<HorariosCreacionDTO, Horario>();

            CreateMap<Ruta, RutasDTO>().ReverseMap();
            CreateMap<RutasCreacionDTO, Ruta>();

            CreateMap<Ticket, TicketsDTO>().ReverseMap();
            CreateMap<TicketsCreacionDTO, Ticket>();

            /*CreateMap<TicketsCreacionDTO, Ticket>()
                .ForMember(x => x.TicketsBuses, opciones => opciones.MapFrom(MapearTicketsBuses))
                .ForMember(x => x.TicketsHorarios, opciones => opciones.MapFrom(MapearTicketsHorarios))
                .ForMember(x => x.TicketsRutas, opciones => opciones.MapFrom(MapearTicketsRutas));*/

            CreateMap<IdentityUser, UsuarioDTO>();
        }

        /*private List<TicketsRutas> MapearTicketsRutas(TicketsCreacionDTO ticketCreacionDTO,
            Ticket ticket)
        {
            var resultado = new List<TicketsRutas>();

            if (ticketCreacionDTO.RutasIds == null) { return resultado; }

            foreach (var id in ticketCreacionDTO.RutasIds)
            {
                resultado.Add(new TicketsRutas() { RutaId = id });
            }

            return resultado;
        }

        private List<TicketsBuses> MapearTicketsBuses(TicketsCreacionDTO ticketCreacionDTO,
            Ticket ticket)
        {
            var resultado = new List<TicketsBuses>();

            if (ticketCreacionDTO.BusesIds == null) { return resultado; }

            foreach (var id in ticketCreacionDTO.BusesIds)
            {
                resultado.Add(new TicketsBuses() { BusId = id });
            }

            return resultado;
        }

        private List<TicketsHorarios> MapearTicketsHorarios(TicketsCreacionDTO ticketCreacionDTO,
            Ticket ticket)
        {
            var resultado = new List<TicketsHorarios>();

            if (ticketCreacionDTO.HorariosIds == null) { return resultado; }

            foreach (var id in ticketCreacionDTO.HorariosIds)
            {
                resultado.Add(new TicketsHorarios() { HorarioId = id });
            }

            return resultado;
        }*/
    }
}
