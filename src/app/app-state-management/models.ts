import { LoginState } from '../login/login-state-management/models';

export interface AppState {
  login: LoginState;
  /* todo: TodoListState;*/
}
