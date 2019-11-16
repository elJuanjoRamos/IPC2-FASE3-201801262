import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { NavController, ToastController  } from '@ionic/angular';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
})
export class RecuperacionPage implements OnInit {
  user: string = "";
  pass: string = "";
  estado: boolean = false;
  constructor(public router: Router, public navCtrl: NavController,
    public toastController: ToastController, public service: UsuarioService) { }

  ngOnInit() {
  }
  verificar( username: string ) {
    if (username === undefined) {
      this.toastMensaje('Uno o más campos estan vacíos. Verificar datos.');

    } else {
      if ( username.includes('@fase3.com') ) {
        this.estado = true;
        let randomstring = Math.random().toString(36).slice(-8);
        this.user = username;
        this.pass = randomstring;

        let usuario = {
          username: this.user,
          password: randomstring
        }
        this.service.putPassword(usuario).subscribe(data =>{
        });
      } else {
        this.toastMensaje('El correo no es valido.');
      }
    }
    }

  public goToRoute(ruta:string) {
    this.router.navigate([ruta]);
  }
  async toastMensaje(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}
