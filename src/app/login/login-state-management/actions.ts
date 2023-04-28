import { Action } from '@ngrx/store';
import { UserCredentials } from './models';

export enum LoginActionTypes {
  Login = 'login->initialize'
}

export class LoginAction implements Action {
  readonly type = LoginActionTypes.Login;

  constructor(public payload: UserCredentials) {}
}

export type LoginActions = LoginAction; // use | to add more actions for this use case
