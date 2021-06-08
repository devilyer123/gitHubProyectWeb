import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utlidades';
import { rutaCracionDTO, rutaDTO } from '../ruta';
import { RutasService } from '../rutas.service';

@Component({
  selector: 'app-editar-ruta',
  templateUrl: './editar-ruta.component.html',
  styleUrls: ['./editar-ruta.component.css']
})
export class EditarRutaComponent implements OnInit {

  constructor(
    private router: Router, 
    private rutasServices: RutasService,
    private activatedRoute: ActivatedRoute) { }

  modelo: rutaDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.rutasServices.obtenerPorId(params.id)
      .subscribe(ruta => {
        this.modelo = ruta;
      }, () => this.router.navigate(['/rutas']))
    });   
  }

  guardarCambios(ruta: rutaCracionDTO){
    this.rutasServices.editar(this.modelo.id,ruta)
    .subscribe(() =>{
      this.router.navigate(['/rutas']);
    }, error => this.errores = parsearErroresAPI(error))
  }

}
