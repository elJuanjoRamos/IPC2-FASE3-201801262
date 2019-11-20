import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AsignacionAuxiliarService } from '../../../../services/asignacionAuxiliar.service';
import { EvaluacionService } from '../../../../services/evaluaion.service';
import { ActividadService } from '../../../../services/actividad.service';
import { CursoService } from '../../../../services/curso.service';
import { NavController, ToastController  } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TipoEvaluacionService } from '../../../../services/tipoEvaluacion.service';

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.component.html'
})
export class ModalDetalleComponent implements OnInit {
  miCurso: any;
  misActividades: any;
  misEvaluaciones: any;
  modalEvaluacion: boolean = false;
  modalActividad: boolean = false;
  message: string;

  //#region VARIABLES EVALUACION
  evaluacionEstudiante: any;
  detalleEvaluacion: any;
  arrayPreguntas: any[] = [];
  arrayPreguntasSM: any[] = [];
  arrayDet: any[] = [];
  arrayPreguntasRestpuestas: any[] = [];
  validarSM: boolean = false;
  validarVF: boolean = false;
  validarPreguntas: boolean = false;
  validarDetalle: boolean = true;
  //#endregion

  //#region VARIABLES ACTIVIDAD
  actividad: any[] = [];
  //#endregion
  constructor(
    private tipoService: TipoEvaluacionService,
    private navParams: NavParams, private modal: ModalController, public toastController: ToastController,
    private service: AsignacionAuxiliarService, private actividadService: ActividadService,
    private evService: EvaluacionService, private cursoService: CursoService, private router: Router
  ) { }

  ngOnInit() {
    this.navParams.get('parametro');
    this.inicializar();
  }

  inicializar() {
    this.message = "Informacion del curso";
    this.miCurso = null;
    this.service.getMyCourse(this.navParams.get('parametro')).subscribe(data => {
      this.miCurso = data;
    });
    this.evService.getAllEv(this.navParams.get('parametro')).subscribe(data => {
      this.misEvaluaciones = data;
    });
    this.actividadService.getMisActividades(this.navParams.get('parametro')).subscribe(data => {
      this.misActividades = data;
    });
  }
  cerrar() {
    this.modal.dismiss();
  }
  cerrar2() {
    this.inicializar();
    this.modalEvaluacion = false;
  }


  desasignar() {
    var data = {
      idUsuario: localStorage.getItem('id'),
      idAsignacionAuxiliar: this.navParams.get('parametro')
    }
    this.cursoService.postDesasignar(data).subscribe(res => {
      var informacion = JSON.parse(JSON.stringify(res));
      console.log(informacion)
      if (informacion.ok === true) {
        this.inicializar();
        this.mensaje('Se ha enviado una solicutud al administrador');
      } else {
        this.mensaje('Ya se ha enviado una solicitud');
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


  //#region EVALUACION

  resolverEvaluacion(id: number) {
    this.limpiar();
    this.modalEvaluacion = true;
    this.message = "Detalle Evaluacion";
    this.evService.getEvaluacion(id).subscribe(data => {
      this.evaluacionEstudiante = JSON.parse(JSON.stringify(data));
      console.log(this.evaluacionEstudiante);
    });
    this.evService.getDetEvaluacion(id).subscribe(data => {
      this.detalleEvaluacion = data;
      this.arrayDet = [];
      this.arrayDet.push(data);
      if (this.arrayDet.length !== 0 || this.arrayDet.length !== undefined) {
        this.validarDetalle = false;
      }
      if( this.detalleEvaluacion.aleatorio == 1 ){
        this.tipoService.getAll2(this.detalleEvaluacion.idDetalleEvaluacion).subscribe(f => {
          this.arrayPreguntasRestpuestas = f[0];
          console.log(this.arrayPreguntasRestpuestas)
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
      } else {
        this.tipoService.getAll(this.detalleEvaluacion.idDetalleEvaluacion).subscribe(f => {
          this.arrayPreguntasRestpuestas = f[0];
          console.log(this.arrayPreguntasRestpuestas)
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
      }
    });
  }

  terminar(){
    var data = {
      idUsuario: localStorage.getItem('id'),
      idEvaluacion: this.evaluacionEstudiante.idEvaluacion,
      punteo: Math.floor(Math.random() * this.detalleEvaluacion.ponderacion) + 1
    }
    var nuevoDet = {
      habilitado: 0,
      aleatorio: this.detalleEvaluacion.aleatorio,
      idDetalleEvaluacion: this.detalleEvaluacion.idDetalleEvaluacion,
      idEvaluacion: this.detalleEvaluacion.idEvaluacion,
      ponderacion: this.detalleEvaluacion.ponderacion
    }
    this.evService.putDet(nuevoDet, this.detalleEvaluacion.idDetalleEvaluacion).subscribe(d => {
      this.tipoService.postMiEvaluacion(data).subscribe(d => {
        this.cerrar2();
      });
    });
  }
  //#endregion

  limpiar(){
    this.arrayPreguntas = [];
    this.arrayPreguntasSM = [];
    this.arrayDet = [];
    this.arrayPreguntasRestpuestas = [];
    this.validarSM = false;
    this.validarVF = false;
    this.validarPreguntas = false;
    this.validarDetalle = true;
  }


//#region ACTIVIDAD
  
  resolver(id: number){
    this.actividad = [];
    this.message = "Formulario de Actividad";
    this.modalEvaluacion = false;
    this.modalActividad = true;
    this.actividadService.getActividad(id).subscribe(data => {
      console.log(data);
      this.actividad.push(data);
    });
  }
  cerrar3() {
    this.inicializar();
    this.modalEvaluacion = false;
    this.modalActividad = false;
  }

  resolverActividad(id: any) {
    this.actividadService.getActividad(id).subscribe(data => {
      var d = {
        idUsuario: localStorage.getItem('id'),
        idActividad: id,
        entregada: 1,
        ponderacion: Math.floor(Math.random() * data.ponderacion) + 1
      };
      this.actividadService.postRespuesta(d).subscribe(data =>{
        this.cerrar3();
      });
    });
  }

//#endregion



}
