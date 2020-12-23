import { action } from 'typesafe-actions';
import { IReducerAction } from '../../rootReducer';
import { ForgotPasswordActionTypes, IEmail } from './';

export const openForgotPasswordModal = () =>
  action(ForgotPasswordActionTypes.OPEN_MODAL, {});

export const closeForgotPasswordModal = () =>
  action(ForgotPasswordActionTypes.CLOSE_MODAL, {});

export const fetchForgotPasswordAction = (
  payload: IEmail
): IReducerAction<IEmail> =>
  action(ForgotPasswordActionTypes.FETCH_FORGOT_PASSWORD, payload);

export const fetchForgotPasswordActionSuccess = (): IReducerAction<{}> =>
  action(ForgotPasswordActionTypes.FETCH_FORGOT_PASSWORD_SUCCESS, {});

export const fetchForgotPasswordActionError = (): IReducerAction<{}> =>
  action(ForgotPasswordActionTypes.FETCH_FORGOT_PASSWORD_ERROR, {});
