import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utlidades';
import { ticketCreacionDTO, ticketDTO } from '../ticket';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-editar-ticket',
  templateUrl: './editar-ticket.component.html',
  styleUrls: ['./editar-ticket.component.css']
})
export class EditarTicketComponent implements OnInit {

  constructor(
    private router: Router, 
    private ticketsServices: TicketsService,
    private activatedRoute: ActivatedRoute
  ) { }
  
  modelo: ticketDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.ticketsServices.obtenerPorId(params.id)
      .subscribe(ruta => {
        this.modelo = ruta;
      }, () => this.router.navigate(['/tickets']))
    });   
  }

  /*guardarCambios(ticket: ticketCreacionDTO){
    this.ticketsServices.editar(this.modelo.id,ticket)
    .subscribe(() =>{
      this.router.navigate(['/tickets']);
    }, error => this.errores = parsearErroresAPI(error))
  }*/

}
