import { LOGIN_USER_ACTION, LoginActions } from './actions';
import { LoginState } from './models';

const INITIAL_LOGIN_STATE: LoginState = {
  credentials: {
    username: '',
    password: ''
  }
};

const LOGIN_USER_REDUCER: (state: LoginState, action: LoginActions) => LoginState = (state, action) => {
  return {
    ...state,
    credentials: action.payload
  };
};

const reducerActionsByType: Map<string, (state: LoginState, action: LoginActions) => LoginState> = new Map([
  [LOGIN_USER_ACTION, LOGIN_USER_REDUCER]
]);

function getLoginReducerByAction(state: LoginState, action: LoginActions): LoginState {
  const loginReducer = reducerActionsByType.get(action.type);
  if (!loginReducer) {
    return state;
  }

  return loginReducer(state, action);
}

export function loginReducer(state: LoginState = INITIAL_LOGIN_STATE, action: LoginActions) {
  return getLoginReducerByAction(state, action);
}
