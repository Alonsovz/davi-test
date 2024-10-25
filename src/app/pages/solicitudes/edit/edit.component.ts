import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SolicitudEntity } from 'src/app/models/solicitud.entity';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  form: FormGroup;
  @Input() data!: SolicitudEntity;
  
  constructor() {
    this.form = new FormGroup({
      'id_solicitud': new FormControl(''),
      'id_persona': new FormControl(''),
      'fecha_creacion': new FormControl(''),
      'monto': new FormControl(''),
      'plazo': new FormControl('12 meses'),
      'id_forma_pago': new FormControl('1'),
    });
  }

  ngOnInit(){
    this.form.patchValue(this.data)
  }

  save(){
    console.log(this.form.value)
  }
}
