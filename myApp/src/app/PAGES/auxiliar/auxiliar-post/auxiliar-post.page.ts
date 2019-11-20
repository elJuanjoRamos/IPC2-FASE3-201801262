import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-auxiliar-post',
  templateUrl: './auxiliar-post.page.html'
})
export class AuxiliarPostPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async asignar(id?: number) {
    const modal = await this.modalController.create({
      component: ModalPostComponent,
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
