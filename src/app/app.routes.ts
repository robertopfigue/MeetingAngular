import {Routes} from '@angular/router';
import { LoginComponent} from './conta/login/login.component';
import { CadastroComponent} from './conta/cadastro/cadastro.component';
import { ListaSalasComponent } from './salas/lista-salas/lista-salas.component';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/cadastro', pathMatch: 'full'},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'salas', component: ListaSalasComponent}
];