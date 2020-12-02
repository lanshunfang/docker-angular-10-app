import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HelloModule} from 'src/hello/hello.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HelloModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
