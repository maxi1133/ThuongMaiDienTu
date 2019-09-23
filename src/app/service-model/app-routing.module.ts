import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../cli/home/home.component';
import { SevComponent } from '../sev/sev.component';


const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:"/home"},
  {path:"home", component:HomeComponent},
  {path:"admin" , component:SevComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
