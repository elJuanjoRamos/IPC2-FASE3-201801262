import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
})
export class RegistroPage implements OnInit {
  estatus: any;
  constructor(public router: Router, public navCtrl: NavController,
              public toastController: ToastController, private service: UsuarioService) { }

  ngOnInit() {
  }


  public goToRoute(ruta: string) {
    this.router.navigate([ruta]);
  }

  Registro(ursn: string, pass: string, nomb: string, ape: string, car: string) {
    if (ursn === undefined || pass === undefined|| nomb === undefined
        || ape === undefined || car === undefined) {
      this.toastMensaje('Uno o más campos estan vacíos. Verificar datos.');

    } else {
      if ( ursn.includes('@fase3.com') ) {
        let usuario = {
          username: ursn,
          password: pass,
          nombre: nomb,
          apellido: ape,
          carnet: car,
          idTipoUsuario: 3
        }
  
        this.service.post(usuario).subscribe(data =>{
          this.estatus = data;
          if ( this.estatus.ok === true) {
             this.router.navigate(['/login']);
          } else {
            this.toastMensaje("El nombre de usuario no esta disponible");
          }
        });
        //this.navCtrl.navigateForward("/home-page/edituser");
        //this.navCtrl.navigateForward("/home-tabs/inbox/" + username);
      } else {
        this.toastMensaje('El correo no es valido.');
      }
    }
  }
  async toastMensaje(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}
