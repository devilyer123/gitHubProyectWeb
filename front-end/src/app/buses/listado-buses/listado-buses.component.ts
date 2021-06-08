import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-buses',
  templateUrl: './listado-buses.component.html',
  styleUrls: ['./listado-buses.component.css']
})
export class ListadoBusesComponent implements OnInit {

  constructor() { }
  @Input()
  buses;

  ngOnInit(): void {
    
  }

  remover(indiceBus: number): void{
    this.buses.splice(indiceBus, 1);
  }

}
