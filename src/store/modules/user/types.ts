export type IUserState = IUserType;

export type IUserType = {
  user: IUser;
  isLoading: boolean;
  firstLogin: IFirstLogin;
};

export type IFirstLogin = {
  component: React.FC;
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

export const UserActionTypes = {
  FETCH_LOGIN: '@@user/FETCH_LOGIN',
  FETCH_LOGIN_SUCCESS: '@@user/FETCH_LOGIN_SUCCESS',
  FETCH_LOGIN_ERROR: '@@user/FETCH_LOGIN_ERROR',
  FETCH_REGISTER: '@@user/FETCH_REGISTER',
  FETCH_REGISTER_SUCCESS: '@@user/FETCH_REGISTER_SUCCESS',
  FETCH_REGISTER_ERROR: '@@user/FETCH_REGISTER_ERROR',
  SIGN_OUT: '@@user/SIGN_OUT',
  FETCH_USER_DATA: '@@user/FETCH_USER_DATA',
  FETCH_USER_DATA_SUCCESS: '@@user/FETCH_USER_DATA_SUCCESS',
  FETCH_USER_DATA_ERROR: '@@user/FETCH_USER_DATA_ERROR',
};
