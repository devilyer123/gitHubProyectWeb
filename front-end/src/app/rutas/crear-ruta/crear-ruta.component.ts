import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utlidades';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { rutaCracionDTO } from '../ruta';
import { RutasService } from '../rutas.service';

@Component({
  selector: 'app-crear-ruta',
  templateUrl: './crear-ruta.component.html',
  styleUrls: ['./crear-ruta.component.css']
})
export class CrearRutaComponent{

  constructor(private rutasServices: RutasService,private router: Router) { }

  ngOnInit(): void {
  }

  errores = [];

  guardarCambios(ruta: rutaCracionDTO){
    this.rutasServices.crear(ruta)
    .subscribe(()=>{
      this.router.navigate(['/rutas']);
    },errores => this.errores= parsearErroresAPI(errores))
  }

}
