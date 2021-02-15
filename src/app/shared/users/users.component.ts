import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UsersService } from "../users.service";

@Component({
  selector: "app-users-table",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: any = [];
  public page: number = 1;

  constructor(public userService: UsersService, public router: Router) {}

  ngOnInit() {
    this.getUserLogged();
    if (
      this.userService.getUser().data.role != "admin" &&
      this.userService.getUser().data.role != "superadmin"
    ) {
      this.router.navigateByUrl("/dashboard");
    } else {
      this.userService.getUserList(this.page).subscribe(data => {
        this.users = data;
      });
    }
  }

  more(page: number) {
    console.log(["PAGE", page]);
    this.userService.getUserList(page).subscribe(data => {
      this.users = data;
      this.page = page;
    });
  }

  getUserLogged() {
    const token = this.userService.getToken();
    if (token === null) this.router.navigateByUrl("/login");
    const user = this.userService.getUser();
    if (!user) this.router.navigateByUrl("/login");
  }
}
