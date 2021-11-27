import { TrabalhoComponent } from './cadastro/candidato/trabalho/trabalho.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { CandidatoComponent } from './cadastro/candidato/candidato.component';
import { RecrutadorComponent } from './cadastro/recrutador/recrutador.component';
import { PerfilComponent } from './cadastro/perfil/perfil.component';
import { VagaComponent } from './match/vaga/vaga.component';
import { ConvocacaoComponent } from './match/convocacao/convocacao.component';
import { AlterarComponent } from './senha/alterar/alterar.component';
import { ReadmeComponent } from './inicio/readme/readme.component';
import { SobreComponent } from './inicio/sobre/sobre.component';
import { PasswordComponent } from './senha/password/password.component';
import { ContatoComponent } from './contato/contato.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { EscolaridadeComponent } from './cadastro/candidato/escolaridade/escolaridade.component';
import { ComportamentalComponent } from './info/comportamental/comportamental.component';
import { TrabalhosComponent } from './info/trabalhos/trabalhos.component';
import { FichaComponent } from './candidato/ficha/ficha.component';
import { UfComponent } from './uf/uf.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatchComponent } from './match/match.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidatoComponent,
    RecrutadorComponent,
    PerfilComponent,
    VagaComponent,
    ConvocacaoComponent,
    AlterarComponent,
    ReadmeComponent,
    SobreComponent,
    PasswordComponent,
    ContatoComponent,
    EscolaridadeComponent,
    ComportamentalComponent,
    TrabalhosComponent,
    FichaComponent,
    UfComponent,
    TrabalhoComponent,
    NavbarComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true // Ao salvar vai remover a máscara
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
