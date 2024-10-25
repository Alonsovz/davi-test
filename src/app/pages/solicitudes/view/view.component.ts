import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitudEntity } from 'src/app/models/solicitud.entity';
import { CreateComponent } from '../create/create.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  id_persona: any;
  cliente: any;
  list_data!: ReadonlyArray<SolicitudEntity>;
  data_solicitud: SolicitudEntity[] = [
    {
      id_solicitud: 1,
      id_persona: 101,
      fecha_creacion: '2024-01-15',
      monto: 1500.00,
      plazo: '12 meses',
      id_forma_pago: 1
    },
    {
      id_solicitud: 2,
      id_persona: 102,
      fecha_creacion: '2024-02-10',
      monto: 3000.00,
      plazo: '24 meses',
      id_forma_pago: 2
    },
    {
      id_solicitud: 3,
      id_persona: 103,
      fecha_creacion: '2024-03-05',
      monto: 2500.00,
      plazo: '18 meses',
      id_forma_pago: 1
    },
    {
      id_solicitud: 4,
      id_persona: 104,
      fecha_creacion: '2024-03-20',
      monto: 5000.00,
      plazo: '36 meses',
      id_forma_pago: 3
    },
    {
      id_solicitud: 5,
      id_persona: 105,
      fecha_creacion: '2024-04-02',
      monto: 1200.00,
      plazo: '12 meses',
      id_forma_pago: 1
    },
    {
      id_solicitud: 6,
      id_persona: 106,
      fecha_creacion: '2024-05-18',
      monto: 7000.00,
      plazo: '48 meses',
      id_forma_pago: 2
    },
    {
      id_solicitud: 7,
      id_persona: 107,
      fecha_creacion: '2024-06-25',
      monto: 3500.00,
      plazo: '24 meses',
      id_forma_pago: 3
    },
    {
      id_solicitud: 8,
      id_persona: 108,
      fecha_creacion: '2024-07-15',
      monto: 10000.00,
      plazo: '60 meses',
      id_forma_pago: 1
    }
  ];

  constructor(private route: ActivatedRoute, private modal: NzModalService){
    this.id_persona = this.route.snapshot.queryParamMap.get('id_persona');
    this.cliente = this.route.snapshot.queryParamMap.get('cliente');
  }

  create(){
    const modal = this.modal.create({
      nzTitle: 'Crear Nueva Solicitud para cliente: '+this.cliente,
      nzContent: CreateComponent,
      nzStyle: {width: '60%'},
      nzBodyStyle:{
        maxHeight: '500px',
        overflowY: 'auto',
      },
      nzFooter: null
    });
    if (modal.componentInstance) {
      modal.componentInstance.id_persona = this.id_persona;
    }
  }
  edit(data: SolicitudEntity) {
    const modal = this.modal.create({
      nzTitle: 'Editar Solicitud ' + data.id_solicitud,
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
  onCurrentPageDataChange(list_data: ReadonlyArray<SolicitudEntity>){
    this.list_data = list_data;
  }
}
