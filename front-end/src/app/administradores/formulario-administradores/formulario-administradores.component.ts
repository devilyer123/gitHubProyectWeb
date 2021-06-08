import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministradoresCreacionDTO, AdministradoresDTO } from '../administradores';

@Component({
  selector: 'app-formulario-administradores',
  templateUrl: './formulario-administradores.component.html',
  styleUrls: ['./formulario-administradores.component.css']
})
export class FormularioAdministradoresComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup

  @Input()
  modelo: AdministradoresDTO;

  @Input()
  errores: string[] = [];


  @Output()
  OnSubmit: EventEmitter<AdministradoresCreacionDTO> = new EventEmitter<AdministradoresCreacionDTO>();

  imagenCambiada = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombreUsuario: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      contraseña: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      correo: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      fechaHabilitacion: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      foto: '',
      //habilitado: false
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(archivo: File){
    this.imagenCambiada = true;
    this.form.get('foto').setValue(archivo);
  }

  guardarCambios(){
    if (!this.imagenCambiada){
      this.form.patchValue({'foto':null})
    }
    this.OnSubmit.emit(this.form.value);
  }

}
