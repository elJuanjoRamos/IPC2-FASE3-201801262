import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NavController, ToastController  } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-mensaje-aux',
  templateUrl: './modal-mensaje-aux.component.html'
})
export class ModalMensajeAuxComponent implements OnInit {
  arrayCursos: any[] = [];
  miCurso: any;
  misEstudiantes: any;
  misActividades: any;
  uri: any;
  idActividad: any;
  message: string;


  //#region VARIABLES ACTIVIDAD
  actividad: any[] = [];
  //#endregion
  constructor(private navParams: NavParams, private modal: ModalController,
              public toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.message = 'Mensaje de Curso';
  }

  inicializar() {

  }
  cerrar() {
    this.modal.dismiss();
  }
  cerrar2() {
  }


  async mensaje( texto: string ) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000
    });
    toast.present();
  }

}
