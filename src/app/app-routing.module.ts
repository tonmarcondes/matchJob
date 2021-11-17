import { ContatoComponent } from './contato/contato.component';
import { PasswordComponent } from './senha/password/password.component';
import { AlterarComponent } from './senha/alterar/alterar.component';
import { ReadmeComponent } from './inicio/readme/readme.component';
import { VagaComponent } from './match/vaga/vaga.component';
import { PerfilComponent } from './cadastro/perfil/perfil.component';
import { RecrutadorComponent } from './cadastro/recrutador/recrutador.component';
import { CandidatoComponent } from './cadastro/candidato/candidato.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './inicio/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: SobreComponent }, //about
  { path: 'login', component: LoginComponent },
  { path: 'candidate', component: CandidatoComponent },
  { path: 'recruiter', component: RecrutadorComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'profile', component: PerfilComponent },
  { path: 'readme', component: ReadmeComponent},
  { path: 'vacancy', component: VagaComponent },
  { path: 'contact', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
