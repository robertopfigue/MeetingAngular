import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Agendamento } from '../models/agendamento.module';
import { SalaLivre } from 'src/app/salas/models/sala-livre.module';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  url = 'https://localhost:44397/api/schedule/Adicionar';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  saveAgendamento(agendamento: Agendamento) {
    return this.httpClient.post(this.url, agendamento);
  }

}