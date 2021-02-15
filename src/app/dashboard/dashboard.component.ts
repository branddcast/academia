import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UsersService } from "../shared/users.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(public userService: UsersService, public router: Router) {}

  ngOnInit() {
    this.getUserLogged();
  }

  getUserLogged() {
    const token = this.userService.getToken();
    console.log(["DASHBOARD", token]);
    if (token === null) {
      this.router.navigateByUrl("/login");
    }
    const user = this.userService.getUser();
    if (!user) this.router.navigateByUrl("/login");
  }
}
