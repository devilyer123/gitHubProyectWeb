import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { busCreacionDTO, busDTO } from '../bus';

@Component({
  selector: 'app-formulario-buses',
  templateUrl: './formulario-buses.component.html',
  styleUrls: ['./formulario-buses.component.css']
})
export class FormularioBusesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  tipoBuses = [
    { id: 1, tipo: 'Normal'},
    { id: 2, tipo: 'Semi-Leito'},
    { id: 3, tipo: 'Leito'}
  ];

  formularioGenBuses={
    tipoBusId: 1,
    capBus: ['',
      {
        validators: [Validators.required, Validators.maxLength(2)],
      },
    ],
    costoAsiento: ['',
      {
        validators: [Validators.required, Validators.maxLength(2)],
      },
    ]
  }

  @Input()
  errores: string[] = [];

  @Input()
  modelo: busDTO;

  @Output()
  onSubmit: EventEmitter<busCreacionDTO> = new EventEmitter<busCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioGenBuses);

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }

  archivoSeleccionado(file){
    this.form.get('foto').setValue(file);
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

  obetenerErrorCampoNombre(){
    var campo = this.form.get('capBus');
    if (campo.hasError('required')){
      return 'El campo es requerido';
    }
    
    if (campo.hasError('maxlength')){
      return 'La longitud maxima es de 2 caracteres';
    } 

    return '';
  }

  obetenerErrorCampoNombre2(){
    var campo2 = this.form.get('costoAsiento');
    if (campo2.hasError('required')){
      return 'El campo es requerido';
    }
    
    if (campo2.hasError('maxlength')){
      return 'La longitud maxima es de 2 caracteres';
    }

    return '';

  }

}
