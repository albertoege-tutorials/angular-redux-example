import { Action } from '@ngrx/store';
import { TodoItem, TodoStatus } from './models';

export enum TodoActionTypes {}

export const ADD_TODO_ITEM = 'todo->ADD_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'todo->REMOVE_TODO_ITEM';
export const GET_TODOS = 'todo:GET_TODOS';
export const GET_TODOS_SUCCEEDED = 'todo:GET_TODOS_SUCCEEDED';
export const GET_TODOS_FAILED = 'todo:GET_TODOS_FAILED';
export const CHANGE_TODO_STATUS = 'todo:CHANGE_TODO_STATUS';

export class AddTodoItemAction implements Action {
  readonly type = ADD_TODO_ITEM;
  constructor(public newItem: TodoItem) {}
}

export class RemoveTodoItemAction implements Action {
  readonly type = REMOVE_TODO_ITEM;
  constructor(public id: string) {}
}

export class GetTodosAction implements Action {
  readonly type = GET_TODOS;
}

export class GetTodosSucceededAction implements Action {
  readonly type = GET_TODOS_SUCCEEDED;
  constructor(public items: TodoItem[]) {}
}

export class GetTodosFailedAction implements Action {
  readonly type = GET_TODOS_FAILED;
  constructor(public error: any) {}
}

export class ChangeTodoStatusAction implements Action {
  readonly type = CHANGE_TODO_STATUS;
  constructor(public status: TodoStatus) {}
}

export type TodoActions =
  | AddTodoItemAction
  | RemoveTodoItemAction
  | GetTodosAction
  | GetTodosSucceededAction
  | GetTodosFailedAction
  | ChangeTodoStatusAction;
