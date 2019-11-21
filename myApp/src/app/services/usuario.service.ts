import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable(/*{ providedIn: 'root' }*/)
export class UsuarioService {
    URI = 'http://localhost:3000/api/';
    headers = new HttpHeaders({'Content-Type': 'application/json','Authorization': localStorage.getItem('id')});

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`${this.URI}/usuario`).pipe(map(user => {
                return user;
            }));
    }
    getUsuario(id: any) {
        return this.http.get<any>(`${this.URI}/usuario/${id}`).pipe(map(user => {
                return user;
            }));
    }
    getAuxiliares() {
        return this.http.get<any[]>(`${this.URI}/auxiliar`).pipe(map(user => {
                return user;
            }));
    }
    getEstudiante(id: any) {
        return this.http.get<any[]>(`${this.URI}/misestudiantes/${id}`).pipe(map(user => {
                return user;
            }));
    }
    getMisAux(id: any) {
        console.log(id)
        return this.http.get<any[]>(`${this.URI}/misauxiliares/${id}`).pipe(map(user => {
                return user;
            }));
    }
    delete(id:any) {
        var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': localStorage.getItem('id')});
        return this.http.delete(`${this.URI}/usuario/${id}`, { headers }).pipe(map(user => {
            return user;
        }));
    }
    post(usuario:any) {
        let data = JSON.stringify(usuario);
        var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': localStorage.getItem('id')});
        return this.http.post(`${this.URI}/usuario/`, data, { headers }).pipe(map(user => {
            return user;
        }));
    }
    put(usuario:any, id:any) {
        let data = JSON.stringify(usuario);
        var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': localStorage.getItem('id')});
        return this.http.put(`${this.URI}/usuario/${id}`, data, { headers }).pipe(map(user => {
            return user;
        }));
    }
    putPassword(usuario) {
        let data = JSON.stringify(usuario);
        var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': localStorage.getItem('id')});
        return this.http.put(`${this.URI}/usuariopass/0`, data, { headers }).pipe(map(user => {
            return user;
        }));
    }


    //////[POST DE USUARIO]
    getAllPost() {
        return this.http.get<any>(`${this.URI}/mypost/`).pipe(map(user => {
                return user;
            }));
    }
    getMyPost(id: any) {
        return this.http.get<any>(`${this.URI}/mypost/${id}`).pipe(map(user => {
                return user;
            }));
    }
    getMyPostSingle(id: any) {
        return this.http.get<any>(`${this.URI}/mypostsingle/${id}`).pipe(map(user => {
                return user;
            }));
    }
    postPost(d:any) {
        let data = JSON.stringify(d);
        var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': localStorage.getItem('id')});
        return this.http.post(`${this.URI}/mypost/`, data, { headers }).pipe(map(user => {
            return user;
        }));
    }
    putPost(d:any, id: any) {
        const data = JSON.stringify(d);
        var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': localStorage.getItem('id')});
        return this.http.put(`${this.URI}/mypost/${id}`, data, { headers }).pipe(map(user => {
            return user;
        }));
    }
    darLike(dat){
        let data = JSON.stringify(dat);
        var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': localStorage.getItem('id')});
        return this.http.post(`${this.URI}/likepost/`, data, { headers }).pipe(map(user => {
            return user;
        }));
    }
    getComentarios(id: any) {
        return this.http.get<any>(`${this.URI}/comments/${id}`).pipe(map(user => {
                return user;
            }));
    }
    postComentarios(dat: any) {
        let data = JSON.stringify(dat);
        var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': localStorage.getItem('id')});
        return this.http.post(`${this.URI}/comments/`, data, { headers }).pipe(map(user => {
            return user;
        }));
    }
}
