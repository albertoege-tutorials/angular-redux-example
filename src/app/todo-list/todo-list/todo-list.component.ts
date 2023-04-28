import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-list-state-management/models';
/* import { AppState } from "../../store/models";
 */ import { Observable } from 'rxjs';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public newTodo: TodoItem = this.getEmptyTodoItem();
  todos: TodoItem[] = [];

  /*   @select((appState: AppState) => appState.todo.items)
  todos$: Observable<TodoItem[]>;

  @select((appState: AppState) => appState.login.credentials.username) */
  public name$: Observable<string> = new Observable();

  ngOnInit(): void {
    /*  this.todos$.subscribe((todos) => {
      this.todos = todos;
    }); */
  }

  public addTodo() {
    const newTodo = {
      ...this.newTodo
    };

    this.newTodo = this.getEmptyTodoItem();
  }

  getEmptyTodoItem(): TodoItem {
    return {
      description: ''
    };
  }
}
