import { Injectable, Input } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { Todoitem } from './todo-item/todo-item.model';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  @Input() todoitem: Todoitem;
  
  radioChangeHandler(event: any) {
    this.todoitem.dueDate = event.target.value;
  }
  constructor() { }
}
