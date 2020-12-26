export type IAuthState = IAuth;

export type IAuth = {
  user: IUser;
  isLoading: boolean;
};

export type IUser = {
  id: string;
  name: string;
  email: string;
  firstLogin: boolean;
  imageUrl: string;
  created_at: string;
  updated_at: string;
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

export type LoginSuccessPayload = {
  token: string;
  user: IUser;
};

export const AuthActionTypes = {
  FETCH_LOGIN: '@@auth/FETCH_LOGIN',
  FETCH_LOGIN_SUCCESS: '@@auth/FETCH_LOGIN_SUCCESS',
  FETCH_LOGIN_ERROR: '@@auth/FETCH_LOGIN_ERROR',
  FETCH_REGISTER: '@@auth/FETCH_REGISTER',
  FETCH_REGISTER_SUCCESS: '@@auth/FETCH_REGISTER_SUCCESS',
  FETCH_REGISTER_ERROR: '@@auth/FETCH_REGISTER_ERROR',
  SIGN_OUT: '@@auth/SIGN_OUT',
};
