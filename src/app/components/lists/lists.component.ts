import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Lists } from "src/app/models/models.list";
import { ToDoService } from "src/app/services/to-do.service";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.scss"],
})
export class ListsComponent implements OnInit {
  @Input() done = true;
  constructor(public toDoService: ToDoService, private router: Router) {}

  ngOnInit() {}
  selectedList(list: Lists) {
    if (this.done) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }
  }
  deleteList(list: Lists) {
    this.toDoService.deleteList(list);
  }
}
