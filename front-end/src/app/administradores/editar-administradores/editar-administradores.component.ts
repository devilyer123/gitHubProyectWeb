import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utlidades';
import { AdministradoresCreacionDTO, AdministradoresDTO } from '../administradores';
import { AdministradoresService } from '../administradores.service';

@Component({
  selector: 'app-editar-administradores',
  templateUrl: './editar-administradores.component.html',
  styleUrls: ['./editar-administradores.component.css']
})
export class EditarAdministradoresComponent implements OnInit {

  constructor(
    private router: Router, 
    private administradoresServices: AdministradoresService,
    private activatedRoute: ActivatedRoute) { }

  modelo: AdministradoresDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.administradoresServices.obtenerPorId(params.id)
      .subscribe(bus => {
        this.modelo = bus;
      }, () => this.router.navigate(['/administradores']))
    });   
  }

  guardarCambios(administrador: AdministradoresCreacionDTO){
    this.administradoresServices.editar(this.modelo.id,administrador)
    .subscribe(() =>{
      this.router.navigate(['/administradores']);
    }, error => this.errores = parsearErroresAPI(error))
  }

}
