import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
import {FormsModule} from '@angular/forms';
import {TodoServiceService} from './todo-service.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TodoItemComponent,
    TodoListComponent,
    NewTodoItemComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
