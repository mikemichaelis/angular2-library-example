import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HelloWorld } from 'x-ng2-library-example/components';
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule, HelloWorld ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
