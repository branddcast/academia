import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UsersService } from "../users.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navBar.component.html",
  styleUrls: ["./navBar.component.css"]
})
export class NavBarComponent implements OnInit {
  constructor(public userService: UsersService, public router: Router) {}

  ngOnInit() {
    this.getUserLogged();
  }

  getUserLogged() {
    const token = this.userService.getToken();
    if (token === null) this.router.navigateByUrl("/login");
    this.userService.getUser().subscribe(user => {
      if (!user) this.router.navigateByUrl("/login");
    });
  }
}
