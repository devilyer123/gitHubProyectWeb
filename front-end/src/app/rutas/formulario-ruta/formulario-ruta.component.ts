import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  departamentos = [
    { value: 'pando', nombreDep: 'Pando'},
    { value: 'la paz', nombreDep: 'La Paz'},
    { value: 'beni', nombreDep: 'Beni'},
    { value: 'oruro', nombreDep: 'Oruro'},
    { value: 'cochabamba', nombreDep: 'Cochabamba'},
    { value: 'santa cruz', nombreDep: 'Santa Cruz'},
    { value: 'potosi', nombreDep: 'Potosi'},
    { value: 'tarija', nombreDep: 'Tarija'},
    { value: 'chuquisaca', nombreDep: 'Chuquisaca'}   
  ];

  formularioGenRutas={
    origen: '',
    destino: '',
    costoRuta: ['',{
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
    var campo = this.form.get('costoRuta');
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

}
