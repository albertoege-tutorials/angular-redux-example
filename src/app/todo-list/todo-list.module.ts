import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild([{ path: '', component: TodoListComponent }])],
  declarations: [TodoListComponent, TodoListItemComponent],
  exports: [TodoListComponent]
})
export class TodoListModule {}
