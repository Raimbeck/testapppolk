import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from "@angular/material";

import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { PrecipitationComponent } from './precipitation/precipitation.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    PrecipitationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
      {path: 'precipitation', component: PrecipitationComponent},
      {path: '', component: TemperatureComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
