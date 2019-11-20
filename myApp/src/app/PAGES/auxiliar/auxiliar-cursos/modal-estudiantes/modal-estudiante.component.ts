import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NavController, ToastController  } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ActividadService } from '../../../../services/actividad.service';
import { AsignacionAuxiliarService } from '../../../../services/asignacionAuxiliar.service';

@Component({
  selector: 'app-modal-estudiante',
  templateUrl: './modal-estudiante.component.html'
})
export class ModalEstudianteComponent implements OnInit {
  miCurso: any;
  misEstudiantes: any;
  misAsistencias: any;
  message: string;
  globalFecha: any;
  globalFecha2: any;
  corroborarAsistencia: Boolean = false;

  //#region VARIABLES ACTIVIDAD
  actividad: any[] = [];
  //#endregion
  constructor(private navParams: NavParams, private modal: ModalController,
              public toastController: ToastController, private router: Router,
              private service: AsignacionAuxiliarService, private actividadService: ActividadService) { }

  ngOnInit() {
    this.message = 'Asistencia de estudiantes';
    this.inicializar();
  }

  inicializar() {
    this.service.getMyCourse(this.navParams.get('parametro')).subscribe(data =>{
      this.miCurso = data;
    });
    this.service.getMyStudents(this.navParams.get('parametro')).subscribe(data =>{
        this.misEstudiantes = data;
    });
  }
  cerrar() {
    this.modal.dismiss();
  }
  cerrar2() {
    this.inicializar();
  }



  async mensaje( texto: string ) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000
    });
    toast.present();
  }

  enviarAsistencia(asistencia: string, id: number){
    if (this.globalFecha != undefined) {
      let data = {
        idUsuario: id,
        valor: asistencia,
        fecha: this.globalFecha,
        idAsignacionAuxiliar: this.navParams.get('parametro')
      };
      this.service.postAsistencia(data).subscribe(data => {
        //this.inicializar();
      });
    } else {
      this.mensaje('Seleccione una fecha');
    }
  }

  getFecha(fecha: any) {
    var splitted = fecha.split('T');
    this.globalFecha = splitted[0];
  }
  getFecha2(fecha: any) {
    var splitted = fecha.split('T');
    this.globalFecha2 = splitted[0];
  }
  verAsistencias(){
    this.corroborarAsistencia = true;
    var data = {
      fecha: this.globalFecha2,
      id: this.navParams.get('parametro')
    }
    this.service.getAsistencia(data).subscribe(d => {
      this.misAsistencias = d;
    });
  }
  terminar(){
    this.corroborarAsistencia = false;
    this.misAsistencias = [];
  }
}
