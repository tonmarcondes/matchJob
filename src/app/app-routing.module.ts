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
  {
    path: 'login', component: LoginComponent,
    children: [
      { path: 'password', component: AlterarComponent },
      { path: 'candidate', component: CandidatoComponent },
      { path: 'recuiter', component: RecrutadorComponent },
    ],
   },
  { path: 'profile', component: PerfilComponent },
  { path: 'readme', component: ReadmeComponent},
  { path: 'vacancy', component: VagaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
