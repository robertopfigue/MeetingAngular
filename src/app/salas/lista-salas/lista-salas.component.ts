import { Component, OnInit } from '@angular/core';
import { SalaLivre } from '../models/sala-livre.module';
import { SalaService } from '../services/sala.service';

@Component({
  selector: 'app-lista-salas',
  templateUrl: './lista-salas.component.html'
})
export class ListaSalasComponent implements OnInit {

  constructor(private salaService: SalaService) { }

  public salaslivres: SalaLivre[] = [];
  public salasreservadas: SalaLivre[] = [];
  
  ngOnInit(): void {
    this.salaService.obterSalasLivres().
    subscribe(
      salas => {
        this.salaslivres = salas
        console.log(salas);
      },
      error => console.log(error)
    );

    this.salaService.obterSalasReservadas().
    subscribe(
      salas => {
        this.salasreservadas = salas
        console.log(salas);
      },
      error => console.log(error)
    );
  }
}
