import { LoginState } from '../login/login-state-management/models';
import { TodoListState } from '../todo-list/todo-list-state-management/models';

export interface AppState {
  login: LoginState;
  todolist: TodoListState;
}

export const LOGIN_FEATURE_KEY = 'login';
export const TODO_LIST_FEATURE_KEY = 'todolist';
