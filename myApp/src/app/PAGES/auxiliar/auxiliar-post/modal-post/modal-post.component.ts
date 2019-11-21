import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NavController, ToastController  } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html'
})
export class ModalPostComponent implements OnInit {
  message: string;
  todo = {};

  constructor(private navParams: NavParams, private modal: ModalController,
              public toastController: ToastController, private router: Router,
              private service: UsuarioService) { }

  ngOnInit() {
    this.message = 'Nuevo Post';
    this.inicializar();
  }

  inicializar() {
    this.todo = {
      idUsuario: localStorage.getItem('id')
    };
  }
  cerrar() {
    this.modal.dismiss();
  }
  logForm() {
    this.service.postPost(this.todo).subscribe(data => {
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

}
