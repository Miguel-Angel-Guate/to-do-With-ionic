import { Pipe, PipeTransform } from "@angular/core";
import { Lists } from "../models/models.list";

@Pipe({
  name: "doneFilter",
})
export class DoneFilterPipe implements PipeTransform {
  transform(toDo: Lists[], done: boolean = true): Lists[] {
    toDo.filter((list) => {});

    return null;
  }
}
