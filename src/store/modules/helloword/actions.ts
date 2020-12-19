import { action } from 'typesafe-actions';
import { IReducerAction } from '../../rootReducer';
import { HelloWorldActionTypes } from './types';

export const sendMessageAction = (): IReducerAction<{}> =>
  action(HelloWorldActionTypes.SEND_HELLO_WORLD, {});
