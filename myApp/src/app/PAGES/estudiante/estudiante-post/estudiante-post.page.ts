import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-estudiante-post',
  templateUrl: './estudiante-post.page.html',
  styleUrls: ['./estudiante-post.page.scss'],
})
export class EstudiantePostPage implements OnInit {
   posts: any;
   arrayComentarios: any;

  constructor(private service: UsuarioService,
              public toastController: ToastController) { }

  ngOnInit() {
    this.inicializar();
  }

  inicializar(){
    this.service.getAllPost().subscribe(data  => {
      this.posts = data;
    });
  }


  inicializarComentario(id: number){
    this.service.getComentarios(id).subscribe(data =>{
      this.arrayComentarios = data;
    });
  }


  darLike(id: any){
    console.log(id);
    const dta = {
      idPost: id,
      idUsuario: localStorage.getItem('id')
    }
    this.service.darLike(dta).subscribe(data =>{
      let temp: any = data;
      this.mensaje(temp.mensaje);
    });
  }
  comentar(com: string, id: any){
    const data ={
      texto: com,
      idPost: id,
      idUsuario: localStorage.getItem('id')
    }
    this.service.postComentarios(data).subscribe(data => {
        this.inicializarComentario(id);
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
