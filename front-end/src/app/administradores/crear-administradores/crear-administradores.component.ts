import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utlidades';
import { AdministradoresCreacionDTO } from '../administradores';
import { AdministradoresService } from '../administradores.service';

@Component({
  selector: 'app-crear-administradores',
  templateUrl: './crear-administradores.component.html',
  styleUrls: ['./crear-administradores.component.css']
})
export class CrearAdministradoresComponent implements OnInit {

  constructor(private adminitradoresService: AdministradoresService, private router: Router) { }

  ngOnInit(): void {
  }

  errores = [];

  guardarCambios(administrador: AdministradoresCreacionDTO){
    this.adminitradoresService.crear(administrador)
    .subscribe(() => {
      this.router.navigate(['/administradores']);
    }, errores => this.errores = parsearErroresAPI(errores))
  }

}
