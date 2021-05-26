import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComboBoxModule, DropdownModule } from 'carbon-components-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComboBoxModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
