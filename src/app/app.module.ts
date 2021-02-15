import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsersComponent } from "./shared/users/users.component";
import { NavBarComponent } from "./shared/navBar/navBar.component";
import { HomeComponent } from "./home/home.component";
import { MaestrosComponent } from "./shared/maestros/maestros.component";
import { GruposComponent } from "./shared/grupos/grupos.component";
import { MateriasComponent } from "./shared/materias/materias.component";
import { InscripcionComponent } from './shared/inscripcion/inscripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    MaestrosComponent,
    NavBarComponent,
    HomeComponent,
    GruposComponent,
    MateriasComponent,
    InscripcionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
