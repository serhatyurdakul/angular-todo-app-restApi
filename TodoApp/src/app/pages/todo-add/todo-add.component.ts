import { Router } from '@angular/router';
import { TodoService } from './../../services/todo.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TodoAdd } from '../../models/todo-add';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css',
})
export class TodoAddComponent {
  todoForm = new FormGroup({
    content: new FormControl(''),
  });

  constructor(private todoService: TodoService, private router: Router) {}
  add() {
    this.todoService.add(this.todoForm.value as TodoAdd).subscribe((x) => {
      if (x == true) {
        this.router.navigateByUrl('/todos');
      }
    });
  }
}
