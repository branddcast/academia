import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "../shared/users.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  user: string;
  password: string;

  constructor(public userService: UsersService, public router: Router) {}

  ngOnInit() {
    this.getUserLogged();
  }

  getUserLogged() {
    const token = this.userService.getToken();
    console.log(token);
    if (token) this.userService.logout();
  }

  login() {
    const user = { email: this.user, password: this.password };
    this.userService.login(user).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl("/dashboard");
      },
      error => {
        console.log(error);
      }
    );
  }
}
