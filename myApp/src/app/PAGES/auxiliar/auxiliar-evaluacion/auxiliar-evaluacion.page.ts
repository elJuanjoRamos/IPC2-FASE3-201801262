import { Component, OnInit } from '@angular/core';
import { EvaluacionService } from '../../../services/evaluaion.service';
import { AsignacionAuxiliarService } from '../../../services/asignacionAuxiliar.service';
import { ModalController } from '@ionic/angular';
import { ModalGestionComponent } from './modal-gestion/modal-gestion.component';

@Component({
  selector: 'app-auxiliar-evaluacion',
  templateUrl: './auxiliar-evaluacion.page.html',
  styleUrls: ['./auxiliar-evaluacion.page.scss'],
})
export class AuxiliarEvaluacionPage implements OnInit {
  misEvaluaciones: any[] = [];
  arrayCursos: any[] = [];
  constructor(private service: EvaluacionService,
              private asigService: AsignacionAuxiliarService,
              private modalController: ModalController) { }
    ngOnInit() {
      this.inicializar();
    }
    inicializar() {
      this.service.getAll(localStorage.getItem('id')).subscribe(data => {
        this.misEvaluaciones = data;
      });
      this.asigService.getAsig(localStorage.getItem('id')).subscribe(data => {
        this.arrayCursos = data;
      });
    }
    eliminar(id:any){
      this.service.delete(id).subscribe(data=> {
        this.inicializar();
      });
    }
    guardar(tit: string, id: any) {
      const data = {
        idAsignacionAuxiliar: id,
        nombre: tit
      }
      this.service.post(data)
      .subscribe(d => {
          this.inicializar();
      });
    }

    async verEvaluacion(id: number) {
      const modal = await this.modalController.create({
        component: ModalGestionComponent,
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
