import { Component, Input } from '@angular/core';
import { TodoItem } from '../todo-list-state-management/models';
import { AppState } from 'src/app/app-state-management/models';
import { Store } from '@ngrx/store';
import { RemoveTodoItemAction } from '../todo-list-state-management/actions';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
  @Input() todo: TodoItem = { description: '' };

  constructor(private store: Store<AppState>) {}

  removeTodo(todo: TodoItem) {
    this.store.dispatch(new RemoveTodoItemAction(todo.id));
  }
}
