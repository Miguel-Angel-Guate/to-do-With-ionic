import { Injectable } from "@angular/core";
import { Lists } from "../models/models.list";

@Injectable({
  providedIn: "root",
})
export class ToDoService {
  toDo: Lists[] = [];

  constructor() {
    const list1 = new Lists("resolve problema about her ASIR ");
    const list2 = new Lists("problem resolved");
    this.toDo.push(list1, list2);
  }
}
