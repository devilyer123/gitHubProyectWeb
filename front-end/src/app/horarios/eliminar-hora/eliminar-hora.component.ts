import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-hora',
  templateUrl: './eliminar-hora.component.html',
  styleUrls: ['./eliminar-hora.component.css']
})
export class EliminarHoraComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  guardarCambios(){
    // ...guardar los cambios
    this.router.navigate(['/horarios']);
  }

}
