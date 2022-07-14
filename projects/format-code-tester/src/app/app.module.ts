import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormatCodeModule } from 'format-code';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormatCodeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
