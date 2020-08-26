import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component'; 

import { TariffService } from './tariff.service'; 
import {DataViewModule} from 'primeng/dataview'; 
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataViewModule,
    DropdownModule,
    FormsModule
  ],
  providers: [TariffService],

  bootstrap: [AppComponent]
})
export class AppModule { }
