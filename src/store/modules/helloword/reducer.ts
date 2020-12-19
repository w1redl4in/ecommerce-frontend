import produce from 'immer';
import { IReducerAction } from '../../rootReducer';
import { HelloWorldActionTypes, HelloWorldState } from './types';

const initialState: HelloWorldState = {
  message: '',
};

export default function helloWorldReducer(
  state = initialState,
  action: IReducerAction<string>
) {
  switch (action.type) {
    case HelloWorldActionTypes.SEND_HELLO_WORLD:
      return produce(state, (draft) => {
        draft.message = 'Hello World!';
      });
    default:
      return state;
  }
}
