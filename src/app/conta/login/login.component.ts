import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms'
import { Login } from '../models/login.module';
import { Usuario } from '../models/usuario.module';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

  loginForm = {} as FormGroup

constructor(private usuarioService: UsuarioService) {}

login = {} as Login;

RealizarLogin(frm: NgForm){
  this.usuarioService.authUsuario(this.login).subscribe(resposta => {
    frm.reset();
  });
}

ngOnInit(){
}

}
