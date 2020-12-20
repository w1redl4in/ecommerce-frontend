export type IAuthState = IAuth;

export type IAuth = {
  login: ILogin;
  register: IRegister;
  isLoading: boolean;
};

export type ILogin = {
  email: string;
  password: string;
};

export type IRegister = {
  name: string;
  email: string;
  password: string;
};

export const AuthActionTypes = {
  FETCH_LOGIN: '@@auth/FETCH_LOGIN',
  FETCH_LOGIN_SUCCESS: '@@auth/FETCH_LOGIN_SUCCESS',
  FETCH_LOGIN_ERROR: '@@auth/FETCH_LOGIN_ERROR',
  FETCH_REGISTER: '@@auth/FETCH_REGISTER',
  FETCH_REGISTER_SUCCESS: '@@auth/FETCH_REGISTER_SUCCESS',
  FETCH_REGISTER_ERROR: '@@auth/FETCH_REGISTER_ERROR',
};
