import {Component, inject} from '@angular/core';
import { TodoModel } from '../../_models/todo.model';
import {TodoService} from '../../_services/todo-service';

@Component({
  selector: 'app-list-page',
  imports: [],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css'
})
export class ListPage {
  todoService = inject(TodoService);


  delete(todo: TodoModel) {
  }
}


// Arrays, functions on array
