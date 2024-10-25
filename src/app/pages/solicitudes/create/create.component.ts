import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  form: FormGroup;
  @Input() id_persona!: any;

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
    this.form.controls["id_persona"].setValue(this.id_persona);
  }

  save(){
    console.log(this.form.value)
  }
  
}
