import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utlidades';
import { horarioCreacionDTO, horarioDTO } from '../horario';
import { HorariosService } from '../horarios.service';

@Component({
  selector: 'app-editar-hora',
  templateUrl: './editar-hora.component.html',
  styleUrls: ['./editar-hora.component.css']
})
export class EditarHoraComponent implements OnInit {

  constructor(
    private router: Router, 
    private horariosServices: HorariosService,
    private activatedRoute: ActivatedRoute) { }

  modelo: horarioDTO;
  errores: string[] = [];


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.horariosServices.obtenerPorId(params.id)
      .subscribe(bus => {
        this.modelo = bus;
      }, () => this.router.navigate(['/horarios']))
    });
  }

  guardarCambios(horario: horarioCreacionDTO){
    this.horariosServices.editar(this.modelo.id, horario)
    .subscribe(() =>{
      this.router.navigate(['/horarios']);
    }, error => this.errores = parsearErroresAPI(error))
  }

}
