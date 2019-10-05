import { Component, OnInit } from "@angular/core";
import { AdminService } from "../service-model/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sev",
  templateUrl: "./sev.component.html",
  styleUrls: ["./sev.component.css"]
})
export class SevComponent implements OnInit {
  TK: string = "";
  MK: string = "";

  constructor(private admin: AdminService, private route: Router) {}

  ngOnInit() {
    
  }

  onLogInClick() {
    
    this.admin.ListTK.forEach(element => {
      if (this.TK == element.TK && this.MK == element.MK) {
        if (confirm("Save account to Browser ? ")) {
          localStorage.setItem("TK", this.TK);
          localStorage.setItem("MK", this.MK);
        }
        element.IsLogIn = true;
        this.admin.User = element;
        this.admin.Dem++;
        if (this.admin.User.Role == "Admin") {
          this.route.navigate(["/Admin"]);
        } else {
          this.route.navigate(["/"]);
        }
      } else {
      }
    });
    if (this.admin.Dem == 0) {
      alert("Sai tài khoản và mật khẩu");
    }
  }
}
