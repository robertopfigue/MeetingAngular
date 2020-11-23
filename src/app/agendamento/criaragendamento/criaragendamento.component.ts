import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { SalaLivre } from 'src/app/salas/models/sala-livre.module';
import { Agendamento } from '../models/agendamento.module';
import { AgendamentoService } from '../services/agendamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criaragendamento',
  templateUrl: './criaragendamento.component.html'
})
export class CriaragendamentoComponent implements OnInit {

  constructor(private agendamentoService: AgendamentoService, router: Router) {}

  agendamento = {} as Agendamento;
  cadastroForm = {} as FormGroup;
  error = {} as string;
  router = {} as Router;

  ngOnInit(): void {

 }

 CriarAgendamento(frm: NgForm){

  this.agendamentoService.saveAgendamento(this.agendamento).subscribe(resposta => {
    frm.resetForm()
    this.error = ""
    this.router.navigate(['/salas']);
  },
  erro => {
    if(erro.status == 400){
       this.error = "Está salá está agendada nesse horário ";
    }
  }
  );
}

}

