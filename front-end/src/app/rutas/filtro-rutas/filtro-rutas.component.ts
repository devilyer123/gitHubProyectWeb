import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-rutas',
  templateUrl: './filtro-rutas.component.html',
  styleUrls: ['./filtro-rutas.component.css']
})
export class FiltroRutasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute) { }

  form: FormGroup;

  destinos = [
    { id: 1, nombre: 'Oruro'},
    { id: 2, nombre: 'La Paz'},
    { id: 3, nombre: 'Santa Cruz'},
    { id: 4, nombre: 'Guayaramerin'}   
  ];

  destinos2 = [
    {tipoBus: 'Cochabamba', busesActuales: false, busesProximos: true, destinos:[4], poster: 'https://web.senado.gob.bo/sites/default/files/styles/img-standard__800x600_/public/Guayaramer%C3%ADn.jpg?itok=Ttj1Imcv'},
    {tipoBus: 'Pando', busesActuales: true, busesProximos: false, destinos:[1], poster: 'https://www.paginasiete.bo/u/fotografias/m/2020/6/25/f608x342-315570_345293_0.jpg'},
    {tipoBus: 'Potosi', busesActuales: false, busesProximos: false, destinos:[2], poster: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Potosiperso.JPG'}
  ]

  destinos2Fijos = this.destinos2;

  formularioOriginal={
    tipoBus: '',
    destinoId: 0,
    busesProximos: false,
    busesActuales: false,
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarDestinos(this.form.value);

    this.form.valueChanges
      .subscribe(valores => {
        this.destinos2 = this.destinos2Fijos;
        this.buscarDestinos(valores);
        this.escribirParametroBusquedaEnURL();
      })
  }

  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params) => {
      var objeto: any = {};

      if (params.tipoBus){
        objeto.tipoBus = params.tipoBus;
      }

      if (params.destinoId){
        objeto.destinoId = Number(params.destinoId);
      }

      if (params.busesProximos){
        objeto.busesProximos = params.busesProximos;
      }

      if (params.busesActuales){
        objeto.busesActuales = params.busesActuales;
      }

      this.form.patchValue(objeto);

    });
  }

  private escribirParametroBusquedaEnURL(){
    var queryStrings = [];

    var valoresFormulario = this.form.value;

    if (valoresFormulario.tipoBus){
      queryStrings.push(`tipoBus=${valoresFormulario.tipoBus}`);
    }

    if (valoresFormulario.destinoId != 0){
      queryStrings.push(`destinoId=${valoresFormulario.destinoId}`);
    }

    if (valoresFormulario.busesProximos){
      queryStrings.push(`busesProximos=${valoresFormulario.busesProximos}`);
    }

    if (valoresFormulario.busesActuales){
      queryStrings.push(`busesActuales=${valoresFormulario.busesActuales}`);
    }

    this.location.replaceState('rutas/buscar', queryStrings.join('&'));
  }

  buscarDestinos(valores: any){
    if(valores.tipoBus){
      this.destinos2 = this.destinos2.filter(destino => destino.tipoBus.indexOf(valores.tipoBus) !== -1);
    }

    if (valores.destinoId !== 0){
      this.destinos2 = this.destinos2.filter(destino => destino.destinos.indexOf(valores.destinoId) !== -1);
    }

    if (valores.busesProximos){
      this.destinos2 = this.destinos2.filter(destino => destino.busesProximos);
    }

    if (valores.busesActuales){
      this.destinos2 = this.destinos2.filter(destino => destino.busesActuales);
    }
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }

}
