import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Making necessary configurations to integrate firebase in the project.
let config={
  apiKey: "AIzaSyAaQWAR-iL2rPn1jrZ1BWjsu8GLP8ttLcM",
  authDomain: "web-forecaster-8db9c.firebaseapp.com",
  projectId: "web-forecaster-8db9c",
  storageBucket: "web-forecaster-8db9c.appspot.com",
  messagingSenderId: "459733241853",
  appId: "1:459733241853:web:239cd1b2263d8adce09394",
  measurementId: "G-SB00WT35G9"
};

import * as firebase from 'firebase/app';
import { WtComponent } from './wt/wt.component';
import { DecComponent } from './dec/dec.component';
firebase.default.initializeApp(config);


@NgModule({
  declarations: [
    AppComponent,
    WtComponent,
    DecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
