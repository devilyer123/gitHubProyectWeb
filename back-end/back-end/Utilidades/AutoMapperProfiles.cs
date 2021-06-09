using AutoMapper;
using back_end.DTOs;
using back_end.Entidades;
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
            CreateMap<Horarios, HorariosDTO>().ReverseMap();
            CreateMap<HorariosCreacionDTO, Horarios>();

            CreateMap<Ruta, RutasDTO>().ReverseMap();
            CreateMap<RutasCreacionDTO, Ruta>();
        }
    }
}
