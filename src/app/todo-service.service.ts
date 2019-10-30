import { Injectable, Input } from '@angular/core';
import { Todoitem } from './todo-item/todo-item.model';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  @Input() todoitem: Todoitem;
}
