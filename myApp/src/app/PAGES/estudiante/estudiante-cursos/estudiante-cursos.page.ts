import { Component, OnInit } from '@angular/core';
import { AsignacionAuxiliarService } from '../../../services/asignacionAuxiliar.service';
import { NavParams, ModalController } from '@ionic/angular';
import { ModalDetalleComponent } from './modal-detalle/modal-detalle.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ModalAsignacionComponent } from './modal-asignacion/modal-asignacion.component';



@Component({
  selector: 'app-estudiante-cursos',
  templateUrl: './estudiante-cursos.page.html'
})
export class EstudianteCursosPage implements OnInit {
  arrayCursos: any[] = [];
  constructor(private service: AsignacionAuxiliarService, private location: Location,
              private activatedRoute: ActivatedRoute, private router: Router,
              private modalController: ModalController) { }
  ngOnInit() {
    this.inicializar();
  }
  inicializar(){
    this.service.getAsigEst(localStorage.getItem('id')).subscribe(data => {
      this.arrayCursos = data;
    });
  }
  async asignar(id?: number) {
    const modal = await this.modalController.create({
      component: ModalAsignacionComponent,
      componentProps: {
        parametro: id
      }

    });

    //regresar parametros del modal a la pagina
    modal.onDidDismiss().then(res => {
        this.inicializar();
    });
    return await modal.present();
  }
  async openModal(id?:number) {
    const modal = await this.modalController.create({
      component: ModalDetalleComponent,
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
