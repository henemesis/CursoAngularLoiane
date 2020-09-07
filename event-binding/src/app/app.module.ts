import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EnventBindingAulaComponent } from './envent-binding-aula/envent-binding-aula.component';

@NgModule({
  declarations: [
    AppComponent,
    EnventBindingAulaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
