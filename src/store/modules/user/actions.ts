import { action } from 'typesafe-actions';
import { IReducerAction } from '../../rootReducer';
import { UserActionTypes, ILogin, IRegister, LoginSuccessPayload } from './';

export const fetchLoginAction = (payload: ILogin): IReducerAction<ILogin> =>
  action(UserActionTypes.FETCH_LOGIN, payload);

export const fetchLoginActionSuccess = (
  payload: LoginSuccessPayload
): IReducerAction<LoginSuccessPayload> =>
  action(UserActionTypes.FETCH_LOGIN_SUCCESS, payload);

export const fetchLoginActionError = (): IReducerAction<{}> =>
  action(UserActionTypes.FETCH_LOGIN_ERROR, {});

export const fetchRegisterAction = (
  payload: IRegister
): IReducerAction<IRegister> => action(UserActionTypes.FETCH_REGISTER, payload);

export const fetchRegisterActionSuccess = (): IReducerAction<{}> =>
  action(UserActionTypes.FETCH_REGISTER_SUCCESS, {});

export const fetchRegisterActionError = (): IReducerAction<{}> =>
  action(UserActionTypes.FETCH_REGISTER_ERROR, {});

export const signOutAction = (): IReducerAction<{}> =>
  action(UserActionTypes.SIGN_OUT, {});
