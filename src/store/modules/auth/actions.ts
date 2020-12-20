import { action } from 'typesafe-actions';
import { IReducerAction } from '../../rootReducer';
import { AuthActionTypes, ILogin, IRegister } from './';

export const fetchLoginAction = (payload: ILogin): IReducerAction<ILogin> =>
  action(AuthActionTypes.FETCH_LOGIN, payload);

export const fetchLoginActionSuccess = (token: {
  token: string;
}): IReducerAction<{
  token: string;
}> => action(AuthActionTypes.FETCH_LOGIN_SUCCESS, token);

export const fetchLoginActionError = (): IReducerAction<{}> =>
  action(AuthActionTypes.FETCH_LOGIN_ERROR, {});

export const fetchRegisterAction = (
  payload: IRegister
): IReducerAction<IRegister> => action(AuthActionTypes.FETCH_REGISTER, payload);

export const fetchRegisterActionSuccess = (): IReducerAction<{}> =>
  action(AuthActionTypes.FETCH_REGISTER_SUCCESS, {});

export const fetchRegisterActionError = (): IReducerAction<{}> =>
  action(AuthActionTypes.FETCH_REGISTER_ERROR, {});
