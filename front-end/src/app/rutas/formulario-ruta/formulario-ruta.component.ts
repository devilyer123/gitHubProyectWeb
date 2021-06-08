import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { rutaCracionDTO, rutaDTO } from '../ruta';

@Component({
  selector: 'app-formulario-ruta',
  templateUrl: './formulario-ruta.component.html',
  styleUrls: ['./formulario-ruta.component.css']
})
export class FormularioRutaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    /*private location: Location,
    private activatedRouted: ActivatedRoute*/) { }

  form: FormGroup;

  origenes = [
    { id: 1, nombreDep1: 'Pando'},
    { id: 2, nombreDep1: 'La Paz'},
    { id: 3, nombreDep1: 'Beni'},
    { id: 4, nombreDep1: 'Oruro'},
    { id: 5, nombreDep1: 'Cochabamba'},
    { id: 6, nombreDep1: 'Santa Cruz'},
    { id: 7, nombreDep1: 'Potosi'},
    { id: 8, nombreDep1: 'Tarija'},
    { id: 9, nombreDep1: 'Chuquisaca'}   
  ];

  destinos = [
    { id: 1, nombreDep2: 'Pando'},
    { id: 2, nombreDep2: 'La Paz'},
    { id: 3, nombreDep2: 'Beni'},
    { id: 4, nombreDep2: 'Oruro'},
    { id: 5, nombreDep2: 'Cochabamba'},
    { id: 6, nombreDep2: 'Santa Cruz'},
    { id: 7, nombreDep2: 'Potosi'},
    { id: 8, nombreDep2: 'Tarija'},
    { id: 9, nombreDep2: 'Chuquisaca'}   
  ];

  formularioGenRutas={
    origenId: 1,
    destinoId: 2,
    porcentaje: ['',{
      validators: [Validators.required, Validators.maxLength(3)]
    }],
    duraViaAprox: ['',{
      validators: [Validators.required, Validators.maxLength(2)]
    }]
  }

  @Input()
  errores: string[]=[];
  
  @Input()
  modelo: rutaDTO;
  
  @Output()
  onSubmit: EventEmitter<rutaCracionDTO> = new EventEmitter<rutaCracionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioGenRutas);

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }


  obetenerErrorCampoNombre(){
    var campo = this.form.get('porcentaje');
    if (campo.hasError('required')){
      return 'El campo es requerido';
    }
    
    if (campo.hasError('maxlength')){
      return 'La longitud maxima es de 3 caracteres';
    } 

    /*if (campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }*/
    
    return '';
  }

  obetenerErrorCampoNombre2(){
    var campo2 = this.form.get('duraViaAprox');
    if (campo2.hasError('required')){
      return 'El campo es requerido';
    }
    
    if (campo2.hasError('maxlength')){
      return 'La longitud maxima es de 2 caracteres';
    }

    return '';
  }

  limpiar(){
    this.form.patchValue(this.formularioGenRutas);
  } //revisar esta MRD

}
