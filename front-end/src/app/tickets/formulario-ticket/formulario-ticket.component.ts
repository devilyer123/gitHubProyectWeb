import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { busDTO, busTicketDTO } from 'src/app/buses/bus';
import { BusesService } from 'src/app/buses/buses.service';
import { horarioDTO } from 'src/app/horarios/horario';
import { HorariosService } from 'src/app/horarios/horarios.service';
import { rutaDTO, rutaTicketDTO } from 'src/app/rutas/ruta';
import { RutasService } from 'src/app/rutas/rutas.service';
import { ticketCreacionDTO, ticketDTO } from '../ticket';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-formulario-ticket',
  templateUrl: './formulario-ticket.component.html',
  styleUrls: ['./formulario-ticket.component.css']
})
export class FormularioTicketComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private rutasService: RutasService,
    private busesService: BusesService,
    private horariosService: HorariosService) { }
    

  form: FormGroup

  departamentos = [
    { value: 'pando', nombreDep: 'Pando'},
    { value: 'la paz', nombreDep: 'La Paz'},
    { value: 'beni', nombreDep: 'Beni'},
    { value: 'oruro', nombreDep: 'Oruro'},
    { value: 'cochabamba', nombreDep: 'Cochabamba'},
    { value: 'santa cruz', nombreDep: 'Santa Cruz'},
    { value: 'potosi', nombreDep: 'Potosi'},
    { value: 'tarija', nombreDep: 'Tarija'},
    { value: 'chuquisaca', nombreDep: 'Chuquisaca'}   
  ];

  tipoBuses = [
    { id: 1, tipo: 'Normal'},
    { id: 2, tipo: 'Semi-Leito'},
    { id: 3, tipo: 'Leito'}
  ];

  formularioGenTickets={
    origen: '',
    destino: '',
    tipoBus: '',
    fechaSalida: '',
    horaSalida: '',
    horaLlegada: '',
    costoTicket: ''
  }

  @Input()
  errores: string[]=[];
  
  @Input()
  modelo: ticketDTO;
  
  @Output()
  onSubmit: EventEmitter<ticketCreacionDTO> = new EventEmitter<ticketCreacionDTO>();

  notFound = false;

  @Input()
  ruta : rutaDTO;

  @Input()
  bus : busDTO;

  @Input()
  hora : horarioDTO;
   

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioGenTickets);

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

  /*guardarCambios34(){
    //const tiket=TicketsCreacionDTO
    console.log(this.form)

    //this.OnSubmit.emit(this.form.value);
  }*/

  getUser(Id: string){
    this.notFound = false;
    this.ruta = null;

    this.rutasService.getUser(Id).subscribe(tikets => {
      this.ruta =tikets,
      this.formularioGenTickets.origen = this.ruta.origen,
      this.formularioGenTickets.destino = this.ruta.destino;
    }), (error: any) => {
      console.error(error);
      this.notFound = true;
    }
  }

  getUser2(Id: string){
    this.notFound = false;
    this.bus = null;

    this.busesService.getUser2(Id).subscribe(tikets => {
      this.bus =tikets,
      this.formularioGenTickets.tipoBus = this.bus.tipoBus;
    }), (error: any) => {
      console.error(error);
      this.notFound = true;
    }
  }
  
  getUser3(Id: string){
    this.notFound = false;
    this.hora = null;

    this.horariosService.getUser3(Id).subscribe(tikets => {
      this.hora =tikets;
    }), (error: any) => {
      console.error(error);
      this.notFound = true;
    }
  }

}
