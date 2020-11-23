import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalaLivre } from '../models/sala-livre.module';
import { NgModule } from '@angular/core'
import { SalaReservada } from '../models/sala-reservada.module';
import { Sala } from '../models/sala-module';

@Injectable()
export class SalaService{

    constructor(private httpClient: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }

    url: string = "https://localhost:44397/api/room/ListaSalasLivres";
    url2: string = "https://localhost:44397/api/room/ListaSalasReservadas";
    url3: string = "https://localhost:44397/api/room/Adicionar";

    obterSalasLivres() : Observable<SalaLivre[]> {
        return this.httpClient.get<SalaLivre[]>(this.url)
    }

    obterSalasReservadas() : Observable<SalaReservada[]> {
        return this.httpClient.get<SalaReservada[]>(this.url2)
    }

    addSala(sala: Sala){
        return this.httpClient.post(this.url3, sala);
    }
}