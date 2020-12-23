import { combineReducers } from 'redux';
import { IAuthState } from './modules/auth';
import authReducer from './modules/auth/reducer';
import { IForgotPasswordState } from './modules/forgot-password';
import forgotPasswordReducer from './modules/forgot-password/reducer';
import helloWorldReducer from './modules/helloword/reducer';
import { HelloWorldState } from './modules/helloword/types';

export type IReducerAction<T> = { type: string; payload: T };

export interface AppState {
  helloWorld: HelloWorldState;
  auth: IAuthState;
  forgotPassword: IForgotPasswordState;
}

export default combineReducers({
  helloWorld: helloWorldReducer,
  auth: authReducer,
  forgotPassword: forgotPasswordReducer,
});
