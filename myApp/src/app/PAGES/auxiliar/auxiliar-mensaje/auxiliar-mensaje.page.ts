import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../../../services/mensaje.service';
import { UsuarioService } from '../../../services/usuario.service';
import { ModalController } from '@ionic/angular';
import { ModalMensajeAuxComponent } from './modal-mensaje-aux/modal-mensaje-aux.component';

@Component({
  selector: 'app-auxiliar-mensaje',
  templateUrl: './auxiliar-mensaje.page.html'
})
export class AuxiliarMensajePage implements OnInit {
  usuarios: any[] = [];
  constructor(private service: UsuarioService,private mensajeService: MensajeService,
              private modalController: ModalController) {
  }
  ngOnInit() {
    this.inicializarUsuarios();
  }


  inicializarUsuarios() {
    this.service.getEstudiante(localStorage.getItem('id')).subscribe(data => {
        this.usuarios = data;
      }
    );
  }

  async abrirModal(id: number) {
    const modal = await this.modalController.create({
      component: ModalMensajeAuxComponent,
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
