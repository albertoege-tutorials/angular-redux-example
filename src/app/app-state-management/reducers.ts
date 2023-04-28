import { combineReducers } from '@ngrx/store';
import { loginReducer } from '../login/login-state-management/reducer';

// reducers together into a given structure.
export const rootReducer = combineReducers({
  /*   todo: todoReducer,
   */ login: loginReducer
});
