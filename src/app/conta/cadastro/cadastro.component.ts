import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { empty } from 'rxjs';
import { Usuario } from '../models/usuario.module';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ]
})
export class CadastroComponent {

  ngOnInit(){
  }

  usuario = {} as Usuario;
  cadastroForm = {} as FormGroup;

  constructor(private usuarioService: UsuarioService) {}

CadastrarUsuario(frm: NgForm){

  this.usuarioService.saveUsuario(this.usuario).subscribe(resposta => {
    frm.reset();
  });
}
}
