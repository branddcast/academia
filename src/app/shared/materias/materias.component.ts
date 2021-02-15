import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UsersService } from "../users.service";

@Component({
  selector: "app-materias-table",
  templateUrl: "./materias.component.html",
  styleUrls: ["./materias.component.css"]
})
export class MateriasComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
