import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NavController, ToastController  } from '@ionic/angular';

@Component({
  selector: 'app-modal-actividad',
  templateUrl: './modal-actividad.component.html'
})
export class ModalActividadComponent implements OnInit {
  array: any[] = [];
  informacion:any;
  constructor(
    private navParams: NavParams, private modal: ModalController,public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.inicializar();
  }

  inicializar() {
    this.service.get().subscribe(data => {
      this.array = data;
    });
  }
  cerrar() {
    this.modal.dismiss();
  }

  asignar(id: any) {
    
  }

  async mensaje( texto: string ) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000
    });
    toast.present();
  }
}
