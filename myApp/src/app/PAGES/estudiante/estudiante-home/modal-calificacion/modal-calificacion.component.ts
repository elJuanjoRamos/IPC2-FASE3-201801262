import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NavController, ToastController  } from '@ionic/angular';
import { ActividadService } from '../../../../services/actividad.service';
import { TipoEvaluacionService } from '../../../../services/tipoEvaluacion.service';

@Component({
  selector: 'app-modal-calificacion',
  templateUrl: './modal-calificacion.component.html'
})
export class ModalCalificacionComponent implements OnInit {
  misActiv: any;
  misEvs: any;
  constructor(private service: ActividadService, private tipoService: TipoEvaluacionService,
    private navParams: NavParams, private modal: ModalController, public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.inicializar();
  }

  inicializar() {
    this.service.getMyActiv(localStorage.getItem('id')).subscribe(data =>{
      this.misActiv = data;
    });
    this.tipoService.getAllMisEvaluaciones(localStorage.getItem('id')).subscribe(data => {
      this.misEvs = data[0];
      console.log(data);
    });
  }
  cerrar() {
    this.modal.dismiss();
  }
}
