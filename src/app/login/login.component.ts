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
  wrongUser: string = "";
  wrongPassword: string = "";

  constructor(public userService: UsersService, public router: Router) {}

  ngOnInit() {
    this.getUserLogged();
  }

  getUserLogged() {
    const token = this.userService.getToken();
    if (token) this.userService.logout();
  }

  login() {
    const emailRegEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (!emailRegEx.test(this.user))
      return (this.wrongUser = "Ingrese un correo válido.");

    if (/["'<>&=*]/.test(this.password))
      return (this.wrongPassword =
        "Contraseña incorrecta. Evitar caracteres \"'<>&=*");

    if (this.password.length < 6 || this.password.length > 25)
      return (this.wrongPassword =
        "Contraseña incorrecta. Longitud menor a 6 o mayor a 25 caracteres.");

    const user = { email: this.user, password: this.password };
    this.userService.login(user).subscribe(
      data => {
        this.userService.setToken(data.token);
        console.log(["USER_OK", data]);
        this.router.navigateByUrl("/dashboard");
      },
      error => {
        console.log(error);
      }
    );
  }
}
