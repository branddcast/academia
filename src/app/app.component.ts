import { Component, VERSION, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "./shared/users.service";
import { Subscription } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public auth: any = false;
  name = "Angular " + VERSION.major;
  private subscription: Subscription;

  constructor(public userService: UsersService, public router: Router) {}

  ngOnInit() {
    this.getUserLogged();
  }

  getUserLogged() {
    const auth = this.userService.auth;
    console.log(["AUTH", auth]);
  }

  getToken() {
    return this.userService.getToken();
  }

  public logout() {
    this.router.navigateByUrl("/login");
  }
}
