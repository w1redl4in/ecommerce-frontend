import { action } from 'typesafe-actions';
import { IReducerAction } from '../../rootReducer';
import { AuthActionTypes, ILogin, IRegister, LoginSuccessPayload } from './';

export const fetchLoginAction = (payload: ILogin): IReducerAction<ILogin> =>
  action(AuthActionTypes.FETCH_LOGIN, payload);

export const fetchLoginActionSuccess = (
  payload: LoginSuccessPayload
): IReducerAction<LoginSuccessPayload> =>
  action(AuthActionTypes.FETCH_LOGIN_SUCCESS, payload);

export const fetchLoginActionError = (): IReducerAction<{}> =>
  action(AuthActionTypes.FETCH_LOGIN_ERROR, {});

export const fetchRegisterAction = (
  payload: IRegister
): IReducerAction<IRegister> => action(AuthActionTypes.FETCH_REGISTER, payload);

export const fetchRegisterActionSuccess = (): IReducerAction<{}> =>
  action(AuthActionTypes.FETCH_REGISTER_SUCCESS, {});

export const fetchRegisterActionError = (): IReducerAction<{}> =>
  action(AuthActionTypes.FETCH_REGISTER_ERROR, {});

export const signOutAction = (): IReducerAction<{}> =>
  action(AuthActionTypes.SIGN_OUT, {});
