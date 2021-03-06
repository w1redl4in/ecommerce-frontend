import { combineReducers } from 'redux';
import { IUserState } from './modules/user';
import userReducer from './modules/user/reducer';
import { IForgotPasswordState } from './modules/forgot-password';
import forgotPasswordReducer from './modules/forgot-password/reducer';
import helloWorldReducer from './modules/helloword/reducer';
import { HelloWorldState } from './modules/helloword/types';
import applicationReducer from './modules/application/reducer';
import { IApplicationState } from './modules/application';

export type IReducerAction<T> = { type: string; payload: T };

export interface AppState {
  helloWorld: HelloWorldState;
  userStore: IUserState;
  forgotPassword: IForgotPasswordState;
  application: IApplicationState;
}

export default combineReducers({
  helloWorld: helloWorldReducer,
  userStore: userReducer,
  forgotPassword: forgotPasswordReducer,
  application: applicationReducer,
});
