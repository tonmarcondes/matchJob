import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { CandidatoComponent } from './cadastro/candidato/candidato.component';
import { RecrutadorComponent } from './cadastro/recrutador/recrutador.component';
import { PerfilComponent } from './cadastro/perfil/perfil.component';
import { VagaComponent } from './cadastro/vaga/vaga.component';
import { ConvocacaoComponent } from './match/convocacao/convocacao.component';
import { AlterarComponent } from './senha/alterar/alterar.component';
import { ReadmeComponent } from './inicio/readme/readme.component';
import { SobreComponent } from './inicio/sobre/sobre.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
