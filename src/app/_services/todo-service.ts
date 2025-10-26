import {inject, Injectable} from '@angular/core';
import {TodoForCreateModel, TodoModel} from '../_models/todo.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  http = inject(HttpClient)
  todoList: TodoModel[] = []


  getAllTodos() {
    this.http.get('http://localhost:1337/api/todos').subscribe((x: any) => {
      this.todoList = x.data;
    })
  }



  // I will change them soon
  add(todoForCreate: TodoForCreateModel) {
    this.http.post('http://localhost:1337/api/todos', {data: todoForCreate}).subscribe((createdTodo: any) => {
      this.todoList.push(createdTodo);
      console.log(createdTodo);
    })
  }

  delete(todoForDelete: TodoModel) {
    this.http.delete('http://localhost:1337/api/todos/' + todoForDelete.documentId).subscribe((x: any) => {
      var index = this.todoList.indexOf(todoForDelete);
      this.todoList.splice(index, 1);
    })

  }
}
