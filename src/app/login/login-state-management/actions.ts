import { Action } from '@ngrx/store';
import { UserCredentials } from './models';

export const LOGIN_USER_ACTION = 'login->LOGIN_USER';

export class LoginAction implements Action {
  readonly type = LOGIN_USER_ACTION;
  constructor(public payload: UserCredentials) {}
}

export type LoginActions = LoginAction; // use | to add more actions for this use case
