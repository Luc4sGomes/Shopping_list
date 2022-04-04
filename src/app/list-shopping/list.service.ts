import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  itemList: string[] = [];

  constructor() { }

  addItem(item: string) {
    this.itemList.push(item);
  }
}
