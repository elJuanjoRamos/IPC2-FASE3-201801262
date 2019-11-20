import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignacionAuxiliarService } from '../../../services/asignacionAuxiliar.service';
import { ModalController } from '@ionic/angular';
import { ModalDetalleAuxComponent } from './modal-detalle-aux/modal-detalle-aux.component';
import { ModalEstudianteComponent } from './modal-estudiantes/modal-estudiante.component';

@Component({
  selector: 'app-auxiliar-cursos',
  templateUrl: './auxiliar-cursos.page.html',
  styleUrls: ['./auxiliar-cursos.page.scss'],
})
export class AuxiliarCursosPage implements OnInit {
  arrayCursos: any[] = [];
  constructor(private service: AsignacionAuxiliarService,
              private router: Router, private modalController: ModalController) { }
  ngOnInit() {

    this.service.getAsig(localStorage.getItem('id')).subscribe(data => {
      this.arrayCursos = data;
    });
  }

  async openModal(id: number) {
    const modal = await this.modalController.create({
      component: ModalDetalleAuxComponent,
      componentProps: {
        parametro: id
      }

    });

    //regresar parametros del modal a la pagina
    modal.onDidDismiss().then(res => {
    });
    return await modal.present();
  }
  async verEstudiantes(id: number) {
    const modal = await this.modalController.create({
      component: ModalEstudianteComponent,
      componentProps: {
        parametro: id
      }
    });

    //regresar parametros del modal a la pagina
    modal.onDidDismiss().then(res => {
    });
    return await modal.present();
  }
}
