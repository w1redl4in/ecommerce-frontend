import { combineReducers } from 'redux';
import helloWorldReducer from './modules/helloword/reducer';
import { HelloWorldState } from './modules/helloword/types';

export type IReducerAction<T> = { type: string; payload: T };

export interface AppState {
  helloWorld: HelloWorldState;
}

export default combineReducers({
  helloWorld: helloWorldReducer,
});
