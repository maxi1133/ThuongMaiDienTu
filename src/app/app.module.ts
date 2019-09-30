import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatSidenavModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from "@angular/material";

import { AppRoutingModule } from "./service-model/app-routing.module";
import { AppComponent } from "./app.component";
import { CliComponent } from "./cli/cli.component";
import { HeaderComponent } from "./cli/header/header.component";
import { HomeComponent } from "./cli/home/home.component";
import { SevComponent } from "./sev/sev.component";
import { AdminhomeComponent } from "./sev/h/adminhome/adminhome.component";
import { AdminheaderComponent } from "./sev/h/adminheader/adminheader.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HComponent } from './sev/h/h.component';
import { ChitietdoanhthuComponent } from './sev/h/chitietdoanhthu/chitietdoanhthu.component';

const material = [
  MatButtonModule,
  MatSidenavModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  declarations: [
    AppComponent,
    CliComponent,
    HeaderComponent,
    HomeComponent,
    SevComponent,
    AdminhomeComponent,
    AdminheaderComponent,
    HComponent,
    ChitietdoanhthuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
