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

import {ChartsModule} from 'ng2-charts';

import { AppRoutingModule } from "./service-model/app-routing.module";
import { AppComponent } from "./app.component";
import { CliComponent } from "./cli/cli.component";
import { HeaderComponent } from "./cli/header/header.component";
import { HomeComponent } from "./cli/home/home.component";
import { SevComponent } from "./sev/sev.component";
import { AdminhomeComponent } from "./sev/h/adminhome/adminhome.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HComponent } from "./sev/h/h.component";
import { ChitietdoanhthuComponent } from "./sev/h/chitietdoanhthu/chitietdoanhthu.component";
import { MainNavComponent } from "./sev/h/main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatListModule } from "@angular/material/list";
import { LinechartComponent } from "./sev/h/adminhome/charts/linechart/linechart.component";

@NgModule({
  declarations: [
    AppComponent,
    CliComponent,
    HeaderComponent,
    HomeComponent,
    SevComponent,
    AdminhomeComponent,

    HComponent,
    ChitietdoanhthuComponent,
    MainNavComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
