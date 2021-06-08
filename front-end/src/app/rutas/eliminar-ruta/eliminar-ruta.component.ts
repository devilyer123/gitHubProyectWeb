import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rutaCracionDTO, rutaDTO } from '../ruta';

@Component({
  selector: 'app-eliminar-ruta',
  templateUrl: './eliminar-ruta.component.html',
  styleUrls: ['./eliminar-ruta.component.css']
})
export class EliminarRutaComponent implements OnInit {

  constructor(private router: Router) { }

  //modelo: rutaDTO = {origenId: 1, destinoId: 6, porcentaje: 1, duraViaAprox: 8};

  ngOnInit(): void {
  }

  guardarCambios(ruta: rutaCracionDTO){
    // ...guardar los cambios
    console.log(ruta);
    this.router.navigate(['/rutas']);
  }

}
