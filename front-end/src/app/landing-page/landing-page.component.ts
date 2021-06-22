import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

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

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
