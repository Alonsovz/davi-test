import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClienteEntity } from 'src/app/models/cliente.entity';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  form: FormGroup;
  @Input() data!: ClienteEntity;

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

  ngOnInit(){
    this.form.patchValue(this.data)
  }

  save(){
    console.log(this.form.value)
  }

}
