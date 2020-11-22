import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { LoginComponent } from './conta/login/login.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { CadastroComponent } from './conta/cadastro/cadastro.component';
import { rootRouterConfig } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { SalaService } from './salas/services/sala.service';
import { ListaSalasComponent } from './salas/lista-salas/lista-salas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    FooterComponent,
    CadastroComponent,
    ListaSalasComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    SalaService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
