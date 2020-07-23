import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules ...
import { AppRoutingModule } from './app-routing.module';
import { LineModule } from "./modules/line/line.module";
import { GEOModule } from "./modules/geo/geo.module";

// components ...
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LineModule,
    GEOModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
