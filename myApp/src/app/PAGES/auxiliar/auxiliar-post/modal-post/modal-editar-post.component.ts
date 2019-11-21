import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NavController, ToastController  } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-modal-editar-post',
  templateUrl: './modal-editar-post.component.html'
})
export class ModalEditarPostComponent implements OnInit {
  todo = {};
    post: any;
  constructor(private navParams: NavParams, private modal: ModalController,
              public toastController: ToastController, private router: Router,
              private service: UsuarioService) { }

  ngOnInit() {
    this.inicializar();
  }

  inicializar() {
    this.service.getMyPostSingle(this.navParams.get('parametro')).subscribe(data => {
        this.post = data[0];
    });
    this.todo = {
      idUsuario: localStorage.getItem('id')
    };
  }
  cerrar() {
    this.modal.dismiss();
  }
  logForm() {
    this.service.putPost(this.todo, this.navParams.get('parametro')).subscribe(data => {
      this.inicializar();
    });
  }

}
