import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utlidades';
import { busCreacionDTO } from '../bus';
import { BusesService } from '../buses.service';

@Component({
  selector: 'app-agregar-bus',
  templateUrl: './agregar-bus.component.html',
  styleUrls: ['./agregar-bus.component.css']
})
export class AgregarBusComponent{

errores: string[] = [];

  constructor(private router: Router, private busesService: BusesService) { }

  guardarCambios(bus: busCreacionDTO){
    this.busesService.agregar(bus).subscribe(() => {
      this.router.navigate(['/buses']);
      }, 
      (error) => this.errores = parsearErroresAPI(error)
    );
  }

}
