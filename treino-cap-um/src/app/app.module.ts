import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuTreinoComponent } from './meu-treino/meu-treino.component';
import { TestandoTreinoComponent } from './testando-treino/testando-treino.component'

@NgModule({
  declarations: [
    AppComponent,
    MeuTreinoComponent,
    TestandoTreinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
