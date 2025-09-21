import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { TodoModel } from '../../_models/todo.model';
import {TodoService} from '../../_services/todo-service';

@Component({
  selector: 'app-add-page',
  imports: [
    FormsModule
  ],
  templateUrl: './add-page.html',
  styleUrl: './add-page.css'
})
export class AddPage {
  todoService = inject(TodoService);
  todoForCreate: TodoModel = new TodoModel();

  addClicked() {
    this.todoService.add(this.todoForCreate);
  }
}
