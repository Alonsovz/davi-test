import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  form: FormGroup;

  constructor(){
    this.form = new FormGroup({
      'dui': new FormControl(''),
      'nit': new FormControl(''),
      'nombres': new FormControl(''),
      'apellidos': new FormControl(''),
      'sexo': new FormControl('1'),
      'id_actividad_economica': new FormControl('1'),
      'id_estado_civil': new FormControl('1'),
    });
  }

  save(){
    console.log(this.form.value)
  }
}
