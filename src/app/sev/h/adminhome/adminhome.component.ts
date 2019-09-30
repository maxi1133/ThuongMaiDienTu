import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service-model/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private admin : AdminService , private route : Router) { }

  ngOnInit() {
    if(this.admin.User.IsLogIn == false){
      alert("Đăng nhập trước !")
      this.route.navigate(['/Signin'])
    }
    
  }

}
