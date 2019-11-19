import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NavController, ToastController  } from '@ionic/angular';
import { TicketService } from '../../../../services/ticket.service';

@Component({
  selector: 'app-modal-detalle-ticket',
  templateUrl: './modal-detalle-ticket.component.html'
})
export class ModalDetalleTicketComponent implements OnInit {
  miTicket: any;
  constructor(private service: TicketService,
              private navParams: NavParams, private modal: ModalController, public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.inicializar();
  }

  inicializar() {
      this.service.getSingle(this.navParams.get('parametro')).subscribe(data => {
        this.miTicket = data;
      });
  }

  cerrar() {
    this.modal.dismiss();
  }
}
