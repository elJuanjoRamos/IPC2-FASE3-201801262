import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { ModalCalificacionComponent } from './modal-calificacion/modal-calificacion.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-estudiante-home',
  templateUrl: './estudiante-home.page.html',
  styleUrls: ['./estudiante-home.page.scss']
})
export class EstudianteHomePage implements OnInit {
  usuario:any;
  usuarios: any[] = []
  constructor(private service: UsuarioService, private router: Router, private modalController: ModalController) { }

  ngOnInit() {
    this.usuario = null;
    this.service.getUsuario(localStorage.getItem('id')).subscribe(data => {
      this.usuarios.push(data[0]);
    });
  }
  logOut(){
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  async verNotas() {
    const modal = await this.modalController.create({
      component: ModalCalificacionComponent,
    });

    //regresar parametros del modal a la pagina
    modal.onDidDismiss().then(res => {
    });
    return await modal.present();
  }
}
