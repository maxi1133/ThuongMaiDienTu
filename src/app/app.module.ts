import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './service-model/app-routing.module';
import { AppComponent } from './app.component';
import { CliComponent } from './cli/cli.component';
import { HeaderComponent } from './cli/header/header.component';
import { HomeComponent } from './cli/home/home.component';
import { SevComponent } from './sev/sev.component';


@NgModule({
  declarations: [
    AppComponent,
    CliComponent,
    HeaderComponent,
    HomeComponent,
    SevComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
