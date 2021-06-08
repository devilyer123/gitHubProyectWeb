import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordenada } from 'src/app/utilidades/mapa/coordenada';
import { horarioCreacionDTO } from '../horario';

@Component({
  selector: 'app-formulario-horarios',
  templateUrl: './formulario-horarios.component.html',
  styleUrls: ['./formulario-horarios.component.css']
})
export class FormularioHorariosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;
  
  @Input()
  modelo: horarioCreacionDTO;

  @Input()
  errores: string[]=[];
  

  @Output()
  onSubmit: EventEmitter<horarioCreacionDTO> = new EventEmitter<horarioCreacionDTO>();

  //coordenadaInicial: Coordenada[] = [];

  formularioGenHorarios={
    horasalida: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    minutossalida: [
      '',
      {
        validators: [Validators.required],
      },
    ],
   // latitud: [
   //   '',
   //  {
     //  validators: [Validators.required]
    // }
  //  ],
   //longitud: [
   //   '',
   //  {
    //   validators: [Validators.required]
   //  }
   // ]
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioGenHorarios);
    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }

  /*coordenadaSeleccionada(coordenada: Coordenada){
    this.form.patchValue(coordenada);
  }*/

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

  obetenerErrorCampoNombre(){
    var campo = this.form.get('horasalida');
    if (campo.hasError('required')){
      return 'El campo es requerido';
    }
    
    if (campo.hasError('maxlength')){
      return 'La longitud maxima es de 2 caracteres';
    } 

    return '';
  }

  obetenerErrorCampoNombre2(){
    var campo2 = this.form.get('minutossalida');
    if (campo2.hasError('required')){
      return 'El campo es requerido';
    }
    
    if (campo2.hasError('maxlength')){
      return 'La longitud maxima es de 2 caracteres';
    }

    return '';

  }

}
