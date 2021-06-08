import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-bus',
  templateUrl: './eliminar-bus.component.html',
  styleUrls: ['./eliminar-bus.component.css']
})
export class EliminarBusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  guardarCambios(){
    // ...guardar los cambios
    this.router.navigate(['/buses']);
  }

}
