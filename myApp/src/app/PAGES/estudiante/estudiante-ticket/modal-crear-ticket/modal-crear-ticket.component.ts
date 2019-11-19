import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NavController, ToastController  } from '@ionic/angular';
import { TicketService } from '../../../../services/ticket.service';

@Component({
  selector: 'app-modal-crear-ticket',
  templateUrl: './modal-crear-ticket.component.html'
})
export class ModalCrearTicketComponent implements OnInit {
  miTicket: any;
  
  constructor(private service: TicketService,
              private navParams: NavParams, private modal: ModalController, public toastController: ToastController,
  ) { }

  ngOnInit() {
  }


 async guardar(titulo: string, descripcion: string) {
  if (titulo === undefined || descripcion === undefined) {
    const toast = await this.toastController.create({
      message: 'Uno o más campos estan vacíos. Verificar datos.',
      duration: 2000
    });
    toast.present();

  } else {
    let ticket = {
      asunto: titulo,
      cuerpo: descripcion,
      idUsuario: localStorage.getItem('id')
    }

    this.service.post(ticket).subscribe(data =>{
      console.log("enviado");
    });
  }
  }

  cerrar() {
    this.modal.dismiss();
  }

}
