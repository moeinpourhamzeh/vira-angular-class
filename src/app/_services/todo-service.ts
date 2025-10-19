import {inject, Injectable} from '@angular/core';
import {TodoModel} from '../_models/todo.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  http = inject(HttpClient)
  todoList: TodoModel[] = []


  getAllTodos() {
    this.http.get('http://localhost:1337/api/todos')
  }



  // I will change them soon
  add(todoForCreate: TodoModel) {
    this.todoList.push(todoForCreate);
  }

  delete(todoForDelete: TodoModel) {
    var index = this.todoList.indexOf(todoForDelete);
    this.todoList.splice(index, 1);
  }
}
