import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../cli/home/home.component';
import { SevComponent } from '../sev/sev.component';
import { AdminhomeComponent } from '../sev/h/adminhome/adminhome.component';
import { HComponent } from '../sev/h/h.component';
import { ChitietdoanhthuComponent } from '../sev/h/chitietdoanhthu/chitietdoanhthu.component';


const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:"/TrangChu"},
  {path:"TrangChu", component:HomeComponent},
  {path:"Signin" , component:SevComponent},
  {path:'Admin',component:HComponent ,children:[
    {path:'',pathMatch:'full',redirectTo:'Home'},
    {path:'Home',component:AdminhomeComponent},
    {path:'Chitietdoanhthu',component:ChitietdoanhthuComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
