import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { LoginComponent } from './conta/login/login.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { CadastroComponent } from './conta/cadastro/cadastro.component';
import { rootRouterConfig } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SalaService } from './salas/services/sala.service';
import { ListaSalasComponent } from './salas/lista-salas/lista-salas.component';
import { CriaragendamentoComponent } from './agendamento/criaragendamento/criaragendamento.component';
import { CriaSalaComponent } from './salas/cria-sala/cria-sala.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpServiceInterceptor } from './interceptor/http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    FooterComponent,
    CadastroComponent,
    ListaSalasComponent,
    CriaragendamentoComponent,
    CriaSalaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    SalaService,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: HTTP_INTERCEPTORS, useClass: HttpServiceInterceptor, multi: true}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
