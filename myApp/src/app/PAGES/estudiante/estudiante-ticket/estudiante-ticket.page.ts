import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket.service';
import { Router } from '@angular/router';
//import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalDetalleTicketComponent } from './modal-detalle-ticket/modal-detalle-ticket.component';
import { ModalCrearTicketComponent } from './modal-crear-ticket/modal-crear-ticket.component';

@Component({
  selector: 'app-estudiante-ticket',
  templateUrl: './estudiante-ticket.page.html',
})
export class EstudianteTicketPage implements OnInit {
  arrayTickets: any;
  constructor(private router: Router, private modalController: ModalController,
    /*private formBuilder: FormBuilder,*/ private service: TicketService) { }
  ngOnInit() {
    this.cargarForm();
    this.inicializar();
  }
  inicializar() {
    this.service.getMisTickets(localStorage.getItem('id')).subscribe(data => {
      this.arrayTickets = data;
    });
  }

  cargarForm() {
  }
  async verTicket(id?: number) {
    const modal = await this.modalController.create({
      component: ModalDetalleTicketComponent,
      componentProps: {
        parametro: id
      }

    });

    modal.onDidDismiss().then(res => {
        this.inicializar();
    });
    return await modal.present();
  }
  async crearTicket() {
    const modal = await this.modalController.create({
      component: ModalCrearTicketComponent,
    });

    modal.onDidDismiss().then(res => {
        this.inicializar();
    });
    return await modal.present();
  }
}
