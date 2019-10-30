import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { Todoitem } from '../todo-item/todo-item.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todoitem: Todoitem[] = [];

  constructor() {
    this.todoitem = [
      new Todoitem('Backyard'),
      new Todoitem('Leaves'),
      new Todoitem('Bathroom')
    ];
  }

  addArticle(text: string) {
    this.todoitem.push(new Todoitem(text));
    console.log(this.todoitem);
  }

  todoitems(): Todoitem[] {
    return this.todoitem;
  }
  ngOnInit() {
  }

}
