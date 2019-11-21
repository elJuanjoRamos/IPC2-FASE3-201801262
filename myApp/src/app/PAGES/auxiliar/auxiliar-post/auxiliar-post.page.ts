import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPostComponent } from './modal-post/modal-post.component';
import { UsuarioService } from '../../../services/usuario.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalEditarPostComponent } from './modal-post/modal-editar-post.component';

@Component({
  selector: 'app-auxiliar-post',
  templateUrl: './auxiliar-post.page.html'
})
export class AuxiliarPostPage implements OnInit {
  misPost: any;
  constructor(private modalController: ModalController, private service: UsuarioService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.inicializar();
  }

  inicializar(){
      this.service.getMyPost(localStorage.getItem('id')).subscribe(data => {
        this.misPost = data;
      });
  }
  async nuevoPost() {
    const modal = await this.modalController.create({
      component: ModalPostComponent
    });
    //regresar parametros del modal a la pagina
    modal.onDidDismiss().then(res => {
        this.inicializar();
    });
    return await modal.present();
  }
  async editarPost(id: number) {
    const modal = await this.modalController.create({
      component: ModalEditarPostComponent,
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
 
}
