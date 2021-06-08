import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
      this.busesActuales = [{
        tipoBus: 'Leito',
        fechaLanzamiento: new Date(),
        precio: 349.99, 
        poster: 'https://www.la-razon.com/wp-content/uploads/2020/06/Terminal-de-Buses-de-La-Paz-AMN-2-1024x682.jpeg'
      },{
        tipoBus: 'Normal',
        fechaLanzamiento: new Date('2021-05-02'),
        precio: 99.99,
        poster: 'https://www.la-razon.com/wp-content/uploads/2020/06/Terminal-de-Buses-de-La-Paz-AMN-2-1024x682.jpeg'
      }];
  }
  busesActuales;
  busesProximos = [];

}
