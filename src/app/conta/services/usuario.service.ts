import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuario.module';
import { Login } from '../models/login.module';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://localhost:44397/api/user/Adicionar';
  url2 = 'https://localhost:44397/api/user/Auth';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  saveUsuario(usuario: Usuario) {
    return this.httpClient.post(this.url, usuario);
  }

  authUsuario(login: Login){
    return this.httpClient.post(this.url2, login);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}