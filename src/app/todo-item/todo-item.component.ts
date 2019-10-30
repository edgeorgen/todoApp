import { Component, OnInit, Input } from '@angular/core';
import { Todoitem } from './todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoitem: Todoitem;
  constructor() { }

  ngOnInit() {
  }

}
