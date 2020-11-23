import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SalaLivre } from '../models/sala-livre.module';
import { Sala } from '../models/sala-module';
import { SalaService } from '../services/sala.service';

@Component({
  selector: 'app-cria-sala',
  templateUrl: './cria-sala.component.html',
  styles: [
  ]
})
export class CriaSalaComponent implements OnInit {

  constructor(private salaService: SalaService) { }

  sala = {} as Sala

  ngOnInit(): void {
  }

  AddSala(frm: NgForm){
    this.salaService.addSala(this.sala).subscribe(resposta => {
      frm.reset();
    });
  }

}
