import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { SalaLivre } from 'src/app/salas/models/sala-livre.module';
import { Agendamento } from '../models/agendamento.module';
import { AgendamentoService } from '../services/agendamento.service';
import { SalaService } from 'src/app/salas/services/sala.service';

@Component({
  selector: 'app-criaragendamento',
  templateUrl: './criaragendamento.component.html'
})
export class CriaragendamentoComponent implements OnInit {

  constructor(private agendamentoService: AgendamentoService, private salaService: SalaService) {}

  agendamento = {} as Agendamento;
  cadastroForm = {} as FormGroup;
  sala = {} as FormGroup;
  salaslivres: SalaLivre[] = [];

  ngOnInit(): void {
    this.sala = new FormGroup({
      sala: new FormControl()
   });

   this.salaService.obterSalasLivres().
   subscribe(
     salas => {
       this.salaslivres = salas
       console.log(salas);
     },
     error => console.log(error)
   );
 }

 CriarAgendamento(frm: NgForm){

  this.agendamentoService.saveAgendamento(this.agendamento).subscribe(resposta => {
    frm.reset();
  });

}
  }

