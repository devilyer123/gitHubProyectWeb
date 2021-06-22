using back_end.Entidades;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            /*modelBuilder.Entity<TicketsRutas>()
                .HasKey(x => new { x.RutaId, x.TicketId });

            modelBuilder.Entity<TicketsBuses>()
                .HasKey(x => new { x.BusId, x.TicketId });

            modelBuilder.Entity<TicketsHorarios>()
                .HasKey(x => new { x.HorarioId, x.TicketId });*/

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Bus> Buses { get; set; }
        public DbSet<Administrador> Administradores { get; set; }
        public DbSet<Horario> Horarios { get; set; }
        public DbSet<Ruta> Rutas { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
        /*public DbSet<TicketsRutas> TicketsRutas { get; set; }
        public DbSet<TicketsBuses> TicketsBuses { get; set; }
        public DbSet<TicketsHorarios> TicketsHorarios { get; set; }*/
    }
}
