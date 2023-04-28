import { LoginActionTypes, LoginActions } from './actions';
import { LoginState } from './models';

const initialLoginState: LoginState = {
  credentials: {
    username: '',
    password: ''
  }
};

export function loginReducer(state: LoginState = initialLoginState, action: LoginActions) {
  switch (action.type) {
    case LoginActionTypes.Login: {
      return {
        ...state,
        credentials: action.payload
      } as LoginState;
    }
    default: {
      return state;
    }
  }
}
