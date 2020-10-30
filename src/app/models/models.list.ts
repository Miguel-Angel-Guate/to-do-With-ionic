import { itemList } from "./item-list.models";

export class Lists {
  id: number;
  title: string;
  created: Date;
  end: Date;
  finish: boolean;
  items: itemList[];
  constructor(title: string) {
    this.title = title;
    this.created = new Date();
    this.finish = false;
    this.items = [];
    this.id = new Date().getTime();
  }
}
