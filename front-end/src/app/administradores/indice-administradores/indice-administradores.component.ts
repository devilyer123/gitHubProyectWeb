import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AdministradoresDTO } from '../administradores';
import { AdministradoresService } from '../administradores.service';

@Component({
  selector: 'app-indice-administradores',
  templateUrl: './indice-administradores.component.html',
  styleUrls: ['./indice-administradores.component.css']
})
export class IndiceAdministradoresComponent implements OnInit {

  constructor(private administradoresService: AdministradoresService) { }

  administradores: AdministradoresDTO[];
  columnasAMostrar = ['id', 'nombreUsuario', 'correo', 'fechaHabilitacion' , 'acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.administradoresService.obtenerTodos(pagina, cantidadElementosAMostrar)
    .subscribe((respuesta: HttpResponse<AdministradoresDTO[]>) => {
      this.administradores = respuesta.body;
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.log(error));
  }

  actualizarPaginacion(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number){
    this.administradoresService.borrar(id)
    .subscribe(() => {
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error => console.error(error));
  }

}
