import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToDoService } from "src/app/services/to-do.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(public toDoService: ToDoService, private router: Router) {}
  addTask() {
    this.router.navigateByUrl("/tabs/tab1/add");
  }
}
