import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ClienteEntity } from 'src/app/models/cliente.entity';
import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  list_data!: ReadonlyArray<ClienteEntity>;
  data_clientes: ClienteEntity[] = [
    {
      id_persona: 1,
      dui: "01234567-8",
      nit: "0614-080987-101-3",
      nombres: "Juan",
      apellidos: "Pérez",
      sexo: "Masculino",
      id_actividad_economica: 1,
      id_estado_civil: 2
    },
    {
      id_persona: 2,
      dui: "12345678-9",
      nit: "0614-080987-102-3",
      nombres: "Ana",
      apellidos: "López",
      sexo: "Femenino",
      id_actividad_economica: 2,
      id_estado_civil: 1
    },
    {
      id_persona: 3,
      dui: "23456789-0",
      nit: "0614-080987-103-3",
      nombres: "Carlos",
      apellidos: "Martínez",
      sexo: "Masculino",
      id_actividad_economica: 3,
      id_estado_civil: 1
    },
    {
      id_persona: 4,
      dui: "34567890-1",
      nit: "0614-080987-104-3",
      nombres: "María",
      apellidos: "González",
      sexo: "Femenino",
      id_actividad_economica: 4,
      id_estado_civil: 2
    },
    {
      id_persona: 5,
      dui: "45678901-2",
      nit: "0614-080987-105-3",
      nombres: "José",
      apellidos: "Hernández",
      sexo: "Masculino",
      id_actividad_economica: 5,
      id_estado_civil: 1
    },
    {
      id_persona: 6,
      dui: "56789012-3",
      nit: "0614-080987-106-3",
      nombres: "Lucía",
      apellidos: "Ramírez",
      sexo: "Femenino",
      id_actividad_economica: 1,
      id_estado_civil: 3
    },
    {
      id_persona: 7,
      dui: "67890123-4",
      nit: "0614-080987-107-3",
      nombres: "David",
      apellidos: "Morales",
      sexo: "Masculino",
      id_actividad_economica: 2,
      id_estado_civil: 1
    },
    {
      id_persona: 8,
      dui: "78901234-5",
      nit: "0614-080987-108-3",
      nombres: "Claudia",
      apellidos: "Ruiz",
      sexo: "Femenino",
      id_actividad_economica: 3,
      id_estado_civil: 2
    },
    {
      id_persona: 9,
      dui: "89012345-6",
      nit: "0614-080987-109-3",
      nombres: "Fernando",
      apellidos: "Castro",
      sexo: "Masculino",
      id_actividad_economica: 4,
      id_estado_civil: 3
    },
    {
      id_persona: 10,
      dui: "90123456-7",
      nit: "0614-080987-110-3",
      nombres: "Laura",
      apellidos: "Vega",
      sexo: "Femenino",
      id_actividad_economica: 5,
      id_estado_civil: 1
    }
  ];

  constructor(private modal: NzModalService, private router: Router){}

  create(){
    this.modal.create({
      nzTitle: 'Crear Nuevo Cliente',
      nzContent: CreateComponent,
      nzStyle: {width: '60%'},
      nzBodyStyle:{
        maxHeight: '500px',
        overflowY: 'auto',
      },
      nzFooter: null
    });
  }

  edit(data: ClienteEntity) {
    const modal = this.modal.create({
      nzTitle: 'Editar Cliente ' + data.nombres + ' ' + data.apellidos,
      nzContent: EditComponent,
      nzStyle: { width: '60%' },
      nzBodyStyle: {
        maxHeight: '500px',
        overflowY: 'auto',
      },
      nzFooter: null
    });
    if (modal.componentInstance) {
      modal.componentInstance.data = data;
    }
  }
  

  ver_solicitudes(data: ClienteEntity){
    this.router.navigate(['dashboard/solicitudes'],{queryParams: {id_persona: data.id_persona, cliente: data.nombres+' '+data.apellidos}})
  }

  onCurrentPageDataChange(list_data: ReadonlyArray<ClienteEntity>){
    this.list_data = list_data;
  }
}
