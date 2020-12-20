import { combineReducers } from 'redux';
import { IAuthState } from './modules/auth';
import authReducer from './modules/auth/reducer';
import helloWorldReducer from './modules/helloword/reducer';
import { HelloWorldState } from './modules/helloword/types';

export type IReducerAction<T> = { type: string; payload: T };

export interface AppState {
  helloWorld: HelloWorldState;
  auth: IAuthState;
}

export default combineReducers({
  helloWorld: helloWorldReducer,
  auth: authReducer,
});
