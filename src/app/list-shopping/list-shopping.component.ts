import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-list-shopping',
  templateUrl: './list-shopping.component.html',
  styleUrls: ['./list-shopping.component.css']
})
export class ListShoppingComponent implements OnInit {

  itens: string[] = [];

  constructor(private listService: ListService) {
   }

  ngOnInit(): void {

  }

  addValueInList(item: string) {
   this.listService.addItem(item);
  }

}
