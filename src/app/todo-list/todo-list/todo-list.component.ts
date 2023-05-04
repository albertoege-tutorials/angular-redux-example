import { Component } from '@angular/core';
import { TodoItem } from '../todo-list-state-management/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state-management/models';
import { AddTodoItemAction } from '../todo-list-state-management/actions';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public newTodo: TodoItem = this.getEmptyTodoItem();

  constructor(private store: Store<AppState>) {}

  public getUserName(): Observable<string> {
    return this.store.select((appState) => appState.login.credentials.username);
  }

  public getTodos(): Observable<TodoItem[]> {
    return this.store.select((appState) => appState.todolist.items);
  }

  public hasTodos(): Observable<boolean> {
    return this.store.select((appState) => appState.todolist.items?.length > 0);
  }

  public getNumberOfTodos(): Observable<number> {
    return this.store.select((appState) => appState.todolist.items?.length);
  }

  public addTodo() {
    if (!this.newTodo.description || !this.hasValidDescription()) {
      return;
    }

    const newTodo = {
      ...this.newTodo
    };

    this.store.dispatch(new AddTodoItemAction(newTodo));
    this.newTodo = this.getEmptyTodoItem();
  }

  getEmptyTodoItem(): TodoItem {
    return {
      description: ''
    };
  }

  private hasValidDescription(): boolean {
    return this.newTodo.description && this.newTodo.description.trim().length > 0;
  }
}
