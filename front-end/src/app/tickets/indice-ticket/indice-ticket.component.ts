import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ticketDTO } from '../ticket';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-indice-ticket',
  templateUrl: './indice-ticket.component.html',
  styleUrls: ['./indice-ticket.component.css']
})
export class IndiceTicketComponent implements OnInit {

  constructor(private ticketsService: TicketsService) { }

  tickets: ticketDTO[];
  columnasAMostrar = ['id', 'origen', 'destino', 'tipoBus', 'fechaSalida', 'horaSalida', 'horaLlegada', 'costoTicket', 'acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.ticketsService.obtenerTodos(pagina, cantidadElementosAMostrar)
    .subscribe((respuesta: HttpResponse<ticketDTO[]>) => {
      this.tickets = respuesta.body;
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.log(error));
  }

  actualizarPaginacion(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number){
    this.ticketsService.borrar(id)
    .subscribe(() => {
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error => console.error(error));
  }

}
