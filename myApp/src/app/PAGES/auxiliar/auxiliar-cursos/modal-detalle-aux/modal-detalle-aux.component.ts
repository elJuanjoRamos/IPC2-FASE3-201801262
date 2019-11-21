import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NavController, ToastController  } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ActividadService } from '../../../../services/actividad.service';
import { AsignacionAuxiliarService } from '../../../../services/asignacionAuxiliar.service';

@Component({
  selector: 'app-modal-detalle-aux',
  templateUrl: './modal-detalle-aux.component.html'
})
export class ModalDetalleAuxComponent implements OnInit {
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
              public toastController: ToastController, private router: Router,
              private service: AsignacionAuxiliarService, private actividadService: ActividadService) { }

  ngOnInit() {
    this.message = 'Detalle de Curso';
    
    this.inicializar();
  }

  inicializar() {
    this.service.getMyCourse(this.navParams.get('parametro')).subscribe(data =>{
      this.miCurso = data;
    });
    this.service.getMyStudents(this.navParams.get('parametro')).subscribe(data =>{
        this.misEstudiantes = data;
    });
    this.actividadService.getMisActividades(this.navParams.get('parametro')).subscribe(data => {
        this.misActividades = data;
    });
    this.service.getAsig(localStorage.getItem('id')).subscribe(data => {
      this.arrayCursos = data;
    });
  }
  cerrar() {
    this.modal.dismiss();
  }
  cerrar2() {
    this.inicializar();
  }


  eliminar(id:any) {
    this.actividadService.delete(id).subscribe(data =>{
        this.inicializar();
    });
  }
  async mensaje( texto: string ) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000
    });
    toast.present();
  }

  guardar(n: string, p: string, h: string, f: string, a: string, ){
      if(n === undefined|| p === undefined|| h === undefined|| f === undefined|| a === undefined){
          this.mensaje('Uno o mas campos estan vacios');
      } else{
        const data = {
          nombre: n,
          ponderacion: p,
          horaLimite: h,
          fechaLimite: f,
          conArchivo: a,
          idAsignacionAuxiliar: this.navParams.get('parametro')
        }
        this.actividadService.post(data)
        .subscribe(d => {
            this.inicializar();
        });
      }
  }

}
