import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { parsearErroresAPI } from 'src/app/utilidades/utlidades';
import { horarioCreacionDTO } from '../horario';
import { HorariosService } from '../horarios.service';

@Component({
  selector: 'app-agregar-hora',
  templateUrl: './agregar-hora.component.html',
  styleUrls: ['./agregar-hora.component.css']
})
export class AgregarHoraComponent implements OnInit {

  constructor(private horariosServices: HorariosService, private router:Router) { }

  ngOnInit(): void {
  }

  errores=[];

  guardarCambios(horario: horarioCreacionDTO){
   this.horariosServices.agregar(horario)
   .subscribe(() => {
    this.router.navigate(['/horarios']);
   },errores=> this.errores=parsearErroresAPI(errores))
  }

}
