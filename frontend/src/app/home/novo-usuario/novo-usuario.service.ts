import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  urlPost = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario){
    return this.http.post(`${this.urlPost}/user/signup`, novoUsuario);
  }

  verificarUsuarioExistente(nomeUsuario: string){
    return this.http.get(`${this.urlPost}/user/exists/${nomeUsuario}`);
  }

}
