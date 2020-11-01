import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, IonList } from "@ionic/angular";
import { Lists } from "src/app/models/models.list";
import { ToDoService } from "src/app/services/to-do.service";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.scss"],
})
export class ListsComponent implements OnInit {
  @ViewChild(IonList) listt: IonList;
  @Input() done = true;
  constructor(
    public toDoService: ToDoService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

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
  async listEdit(list: Lists) {
    const alert = await this.alertCtrl.create({
      header: "Edit list",
      inputs: [
        {
          name: "title",
          type: "text",
          value: list.title,
          placeholder: "name of the the list",
        },
      ],
      buttons: [
        {
          text: "cancel",
          role: "cancel",
          handler: () => {
            this.listt.closeSlidingItems();
          },
        },
        {
          text: "update",
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }
            list.title = data.title;
            this.toDoService.saveStorage();
            this.listt.closeSlidingItems();
          },
        },
      ],
    });
    alert.present();
  }
}
