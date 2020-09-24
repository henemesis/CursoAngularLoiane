import { CriandoModuloModule } from './criando-modulo/criando-modulo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuTreinoComponent } from './meu-treino/meu-treino.component';
import { TestandoTreinoComponent } from './testando-treino/testando-treino.component';
import { CriandoComponenteComponent } from './criando-componente/criando-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    CriandoComponenteComponent,
    MeuTreinoComponent,
    TestandoTreinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriandoModuloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
