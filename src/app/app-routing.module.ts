import { MatchComponent } from './match/match.component';
import { ConvocacaoComponent } from './match/convocacao/convocacao.component';
import { FichaComponent } from './candidato/ficha/ficha.component';
import { EscolaridadeComponent } from './cadastro/candidato/escolaridade/escolaridade.component';
import { UfComponent } from './uf/uf.component';
import { ComportamentalComponent } from './info/comportamental/comportamental.component';
import { TrabalhoComponent } from './cadastro/candidato/trabalho/trabalho.component';
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
  { path: 'contact', component: ContatoComponent },
  { path: 'work', component: TrabalhoComponent },
  { path: 'skill', component: ComportamentalComponent },
  { path: 'uf', component: UfComponent},
  { path: 'knowledge', component: EscolaridadeComponent },
  { path: 'record', component: FichaComponent },
  { path: 'call', component: ConvocacaoComponent },
  { path: 'match', component: MatchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
