import {Routes} from '@angular/router';
import { LoginComponent} from './navegacao/login/login.component';
import { CadastroComponent} from './others/cadastro/cadastro.component';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/cadastro', pathMatch: 'full'},
    {path: 'cadastro', component: CadastroComponent}
];