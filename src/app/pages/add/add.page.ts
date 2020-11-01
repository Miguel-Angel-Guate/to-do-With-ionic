import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { itemList } from "src/app/models/item-list.models";
import { Lists } from "src/app/models/models.list";
import { ToDoService } from "src/app/services/to-do.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.page.html",
  styleUrls: ["./add.page.scss"],
})
export class AddPage implements OnInit {
  List: Lists;
  itemName = "";
  constructor(private toDoService: ToDoService, private route: ActivatedRoute) {
    const listId = this.route.snapshot.paramMap.get("listId");
    this.List = this.toDoService.getList(listId);
  }

  ngOnInit() {}
  addItem() {
    if (this.itemName.length === 0) {
      return;
    }
    const newItem = new itemList(this.itemName);
    this.List.items.push(newItem);

    this.itemName = "";
    this.toDoService.saveStorage();
  }
  changeInThecheck(item: itemList) {
    const pending = this.List.items.filter((itemData) => {
      return !itemData.done;
    }).length;
    if (pending === 0) {
      this.List.created = new Date();
      this.List.finish = true;
    } else {
      this.List.created = null;
      this.List.finish = false;
    }
    this.toDoService.saveStorage();
  }
  delete(i: number) {
    this.List.items.splice(i, 1);
    this.toDoService.saveStorage();
  }
}
