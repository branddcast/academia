import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  public auth: boolean = false;
  temporaryUser: any = {
    data: {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      //role: "admin",
      //role: "teacher",
      //role: "student",
      role: "superadmin",
      avatar: "https://reqres.in/img/faces/2-image.jpg"
    }
  };

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    const data: any = this.http.post("https://reqres.in/api/login", user);
    if (data) this.auth = true;
    return data;
  }
  setToken(token: string) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  getUser() {
    //return this.http.get("https://reqres.in/api/users/2");
    return this.temporaryUser;
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
  getUserList(page: number = 1): Observable<any> {
    return this.http.get("https://reqres.in/api/users?page=" + page);
  }
  public isAuth() {
    return Boolean(this.getToken());
  }
  logout() {
    localStorage.removeItem("token");
    return Boolean(this.getToken());
  }
}
