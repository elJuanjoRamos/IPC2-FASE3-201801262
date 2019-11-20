import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auxiliar-home',
  templateUrl: './auxiliar-home.page.html',
  styleUrls: ['./auxiliar-home.page.scss'],
})
export class AuxiliarHomePage implements OnInit {
  usuario:any;
  usuarios: any[] = []
  constructor(private service: UsuarioService, private router: Router) { }

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

}
