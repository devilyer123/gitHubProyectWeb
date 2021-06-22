import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { rutaDTO, rutaTicketDTO } from 'src/app/rutas/ruta';
import { RutasService } from 'src/app/rutas/rutas.service';
import { parsearErroresAPI } from 'src/app/utilidades/utlidades';
import { ticketCreacionDTO } from '../ticket';
import { TicketsService } from '../tickets.service';


@Component({
  selector: 'app-crear-ticket',
  templateUrl: './crear-ticket.component.html',
  styleUrls: ['./crear-ticket.component.css']
})
export class CrearTicketComponent implements OnInit {
  form: FormGroup
  constructor(private formBuilder: FormBuilder,private ticketServices: TicketsService, private router: Router) { }
  

  ngOnInit(): void {
  }
  
  errores = [];

  guardarCambios(ticket: ticketCreacionDTO){
    this.ticketServices.crear(ticket)
    .subscribe(()=>{
      this.router.navigate(['/tickets']);
    },errores => this.errores= parsearErroresAPI(errores))
  }

}
