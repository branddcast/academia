import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  isAuth: boolean = false;

  constructor(public router: Router) {}

  ngOnInit() {
    this.isAuth = false;
    this.getUserLogged();
  }

  getUserLogged() {
    if (this.isAuth) this.router.navigateByUrl("/dashboard");
    else this.router.navigateByUrl("/login");
  }
}
