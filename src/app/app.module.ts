import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SenadorListComponent } from './senador-list/senador-list.component';
import { SenadorSelectedComponent } from './senador-selected/senador-selected.component';
registerLocaleData(localePt);


@NgModule({
  declarations: [AppComponent, SenadorListComponent, SenadorSelectedComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
