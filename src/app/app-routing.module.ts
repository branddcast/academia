import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MaestrosComponent } from "./shared/maestros/maestros.component";
import { UsersComponent } from "./shared/users/users.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "maestros", component: MaestrosComponent },
  { path: "alumnos", component: UsersComponent },
  { path: "logout", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
