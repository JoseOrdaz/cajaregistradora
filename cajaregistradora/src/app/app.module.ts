import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ComandaComponent } from './components/comanda/comanda.component';

import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    ComandaComponent
  ],
  imports: [
    BrowserModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
