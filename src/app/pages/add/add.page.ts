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
    console.log(this.List);
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
    console.log(item);
  }
}
