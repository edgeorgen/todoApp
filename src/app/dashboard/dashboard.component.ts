import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { Todoitem } from '../todo-item/todo-item.model';
import {FormsModule} from '@angular/forms';
import {TodoServiceService} from '../todo-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedStatus = '';
  todoitem: Todoitem[] = [];
  statusArray: string[] = [
    'Urgent',
    'Days',
    'Weeks'
  ];
  currentStatus: string;

  constructor() {
    this.todoitem = [
      new Todoitem('Backyard'),
      new Todoitem('Leaves'),
      new Todoitem('Bathroom')
    ];
  }

  addItem(text: string, dueDate: string) {
    this.todoitem.push(new Todoitem(text));
    console.log(this.todoitem);
  }

  todoitems(): Todoitem[] {
    return this.todoitem;
  }

  radioChangeHandler(event: any) {
    this.selectedStatus = event.target.value;
  }

  statusVarHelper() {
    this.currentStatus = this.selectedStatus;
    return this.currentStatus;
  }

  ngOnInit() {
  }

}
