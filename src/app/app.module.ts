/* eslint-disable @typescript-eslint/quotes */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
// import { HeaderComponent } from './components/header/header/header.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { IonIntlTelInputModule } from 'ion-intl-tel-input';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    IonIntlTelInputModule,
    IonicSelectableModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent
  ],
})
export class AppModule {}
