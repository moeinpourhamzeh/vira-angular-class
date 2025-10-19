import { Injectable } from '@angular/core';
import {TodoModel} from '../_models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: TodoModel[] = []

  add(todoForCreate: TodoModel) {
    this.todoList.push(todoForCreate);
  }

  delete(todoForDelete: TodoModel) {
    var index = this.todoList.indexOf(todoForDelete);
    this.todoList.splice(index, 1);
  }
}
