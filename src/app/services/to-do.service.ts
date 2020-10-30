import { JsonPipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { Lists } from "../models/models.list";

@Injectable({
  providedIn: "root",
})
export class ToDoService {
  toDo: Lists[] = [];

  constructor() {
    this.runStorage();
  }
  createNewList(title: string) {
    const newList = new Lists(title);
    this.toDo.push(newList);
    this.saveStorage();
    return newList.id;
  }
  getList(id: number | string) {
    id = Number(id);
    return this.toDo.find((dataList) => {
      return dataList.id === id;
    });
  }
  saveStorage() {
    localStorage.setItem("data", JSON.stringify(this.toDo));
  }
  runStorage() {
    if (localStorage.getItem("data")) {
      this.toDo = JSON.parse(localStorage.getItem("data"));
    } else {
      this.toDo = [];
    }
  }
}
