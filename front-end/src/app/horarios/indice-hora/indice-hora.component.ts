import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { horarioDTO } from '../horario';
import { HorariosService } from '../horarios.service';

@Component({
  selector: 'app-indice-hora',
  templateUrl: './indice-hora.component.html',
  styleUrls: ['./indice-hora.component.css']
})
export class IndiceHoraComponent implements OnInit {

  constructor(private horariosService: HorariosService) { }

  horarios: horarioDTO[];
  columnasAMostrar = ['id', 'horasalida', 'minutossalida', 'acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.horariosService.obtenerTodos(pagina, cantidadElementosAMostrar)
    .subscribe((respuesta: HttpResponse<horarioDTO[]>) => {
      this.horarios = respuesta.body;
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.log(error));
  }

  actualizarPaginacion(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number){
    this.horariosService.borrar(id)
    .subscribe(() => {
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error => console.error(error));
  }

}
