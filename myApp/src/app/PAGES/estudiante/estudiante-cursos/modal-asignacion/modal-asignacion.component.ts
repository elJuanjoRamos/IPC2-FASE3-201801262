import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NavController, ToastController  } from '@ionic/angular';
import { AsignacionEstudianteService } from '../../../../services/asignacionEstudiante.service';

@Component({
  selector: 'app-modal-asignacion',
  templateUrl: './modal-asignacion.component.html'
})
export class ModalAsignacionComponent implements OnInit {
  array: any[] = [];
  informacion:any;
  constructor(
    private navParams: NavParams, private modal: ModalController,public toastController: ToastController,
    private service: AsignacionEstudianteService
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
    var data = {
      idUsuario: localStorage.getItem('id'),
      idAsignacionAuxiliar: id
    }

    this.service.post(data)
    .subscribe(res => {
      this.informacion = JSON.parse(JSON.stringify(res));
      if ( this.informacion.ok === true ){
        this.inicializar();
        this.mensaje(this.informacion.mensaje);
      } else {
      this.mensaje(this.informacion.error);
      }
    });
  }

  async mensaje( texto: string ) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000
    });
    toast.present();
  }
}
