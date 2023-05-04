export interface LoginState {
  credentials?: UserCredentials;
}

export interface UserCredentials {
  username: string;
  password: string;
}
