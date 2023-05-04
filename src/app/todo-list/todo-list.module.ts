import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { todoListReducer } from './todo-list-state-management/reducer';
import { TODO_LIST_FEATURE_KEY } from '../app-state-management/models';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TodoListComponent }]),
    StoreModule.forFeature(TODO_LIST_FEATURE_KEY, todoListReducer)
  ],
  declarations: [TodoListComponent, TodoListItemComponent],
  exports: [TodoListComponent]
})
export class TodoListModule {}
