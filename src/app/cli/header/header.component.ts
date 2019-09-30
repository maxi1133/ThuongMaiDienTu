import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { AdminService } from "src/app/service-model/admin.service";
import { Route, ActivatedRoute, Router } from "@angular/router";
import { Khachhang } from "src/app/service-model/khachhang";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private admin: AdminService, private router: Router) {}

  ngOnInit() {}

  onClickToAdmin(event) {
    this.admin.Admin = !this.admin.Admin;

    if (this.admin.Admin) {
      this.router.navigate(["/signin"]);
    } else {
      this.router.navigate(["/home"]);
    }
  }

  onHomeClick() {
    this.admin.Admin = false;
  }

  onLogOut() {
    this.admin.User = this.admin.Guest;
    localStorage.clear();
    this.admin.Dem = 0;
    
  }
}
