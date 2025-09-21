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
}
