import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ToDoService } from "src/app/services/to-do.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(
    public toDoService: ToDoService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    // this.addTask
  }
  async addTask() {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "New Task",
      inputs: [
        {
          name: "title",
          type: "text",
          placeholder: "name of the the list",
        },
      ],
      buttons: [
        {
          text: "cancel",
          role: "cancel",
          handler: () => {},
        },
        {
          text: "New List",
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }
            const listId = this.toDoService.createNewList(data.title);
            this.router.navigateByUrl(`/tabs/tab1/add/${listId}`);
          },
        },
      ],
    });
    alert.present();
  }
}
