import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

   /**
   * Método para autenticar usuário ao logar no sistema
   * Execução: o método recebe um usuario e senha como parametros, e retorna um tipo observable
   * logo após ele interpreta os dados userName e passaword para os dados recebidos e nisso chama o httpCliente
   * criando um post no endereço informado para validar esses dados
   */

  autenticar(usuario: string, senha: string): Observable<any>{
    return this.httpClient.post('http://localhost:3000/user/login',{
      userName: usuario,
      password: senha
    });
  }
}
