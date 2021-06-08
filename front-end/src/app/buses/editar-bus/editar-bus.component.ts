import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utlidades';
import { busCreacionDTO, busDTO } from '../bus';
import { BusesService } from '../buses.service';

@Component({
  selector: 'app-editar-bus',
  templateUrl: './editar-bus.component.html',
  styleUrls: ['./editar-bus.component.css']
})
export class EditarBusComponent implements OnInit {

  constructor(
    private router: Router, 
    private busesService: BusesService,
    private activatedRoute: ActivatedRoute) { }

  modelo: busDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.busesService.obtenerPorId(params.id)
      .subscribe(bus => {
        this.modelo = bus;
      }, () => this.router.navigate(['/buses']))
    });   
  }

  guardarCambios(bus: busCreacionDTO){
    this.busesService.editar(this.modelo.id,bus)
    .subscribe(() =>{
      this.router.navigate(['/buses']);
    }, error => this.errores = parsearErroresAPI(error))
  }

}
