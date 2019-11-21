import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NavController, ToastController  } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { EvaluacionService } from '../../../../services/evaluaion.service';
import { AsignacionAuxiliarService } from '../../../../services/asignacionAuxiliar.service';
import { TipoEvaluacionService } from '../../../../services/tipoEvaluacion.service';



@Component({
  selector: 'app-modal-gestion',
  templateUrl: './modal-gestion.component.html'
})
export class ModalGestionComponent implements OnInit {
  uri: any;
  evaluacion: any;
  detalleEvaluacion: any;
  validar1: boolean = false;
  validar2: boolean = false;
  validarDetalle: boolean = true;
  validarPreguntas: boolean = false;
  validarSM: boolean = false;
  validarVF: boolean = false;

  arrayPreguntas: any[] = [];
  arrayPreguntasSM: any[] = [];
  arrayDet: any[] = [];
  arrayPreguntasRestpuestas: any[] = [];
  loading = false;
  submitted = false;
  submitted1 = false;

  variableHabilitado: any;
  variableAleatorio: any;
constructor(private navParams: NavParams, private modal: ModalController,
            public toastController: ToastController, private router: Router,
            private service: EvaluacionService,
            private asigService: AsignacionAuxiliarService,
            private tipoService: TipoEvaluacionService) { }

  ngOnInit() {
    this.inicializarDetalle();
  }

  inicializarDetalle() {
    this.service.getEvaluacion(this.navParams.get('parametro')).subscribe(data => {
      this.evaluacion = JSON.parse(JSON.stringify(data));
    });
    this.service.getDetEvaluacion(this.navParams.get('parametro')).subscribe(data => {
      this.detalleEvaluacion = data;
      this.arrayDet = [];
      this.arrayDet.push(data);
      if (this.arrayDet.length !== 0 || this.arrayDet.length !== undefined) {
        this.validarDetalle = false;
      }
      this.tipoService.getAll(this.detalleEvaluacion.idDetalleEvaluacion).subscribe(f => {
        this.arrayPreguntasRestpuestas = f[0];
        if(this.arrayPreguntasRestpuestas.some(item => item.tipo === 'SM') == true ) {
          this.validarSM = true;
        } else {
          this.validarVF = true;
        }

        if (this.arrayPreguntasRestpuestas.length !== 0) {
          this.validarPreguntas = true;
        } else {
        }
      });
    });
  }

  crearDetalle(ponderacion: string){
      //console.log(habilitado, aleatorio, ponderacion);
  }
  actualizarDetalle( ponderacion: string){
    console.log(this.variableAleatorio, this.variableHabilitado, ponderacion);
}

  habilitado(valor: any){
    this.variableHabilitado = valor;
  }
  aleatorio(valor: any){
    this.variableAleatorio = valor;
  }
  cerrar() {
    this.modal.dismiss();
  }


  async mensaje( texto: string ) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000
    });
    toast.present();
  }

}
