import produce from 'immer';
import Image from '../../../pages/FirstLogin/Image';
import { IReducerAction } from '../../rootReducer';
import { ApplicationActionTypes, IApplicationState } from './';

const initialState: IApplicationState = {
  firstLogin: {
    component: Image,
    isLoading: false,
  },
};

export default function applicationReducer(
  state = initialState,
  action: IReducerAction<React.FC>
) {
  switch (action.type) {
    case ApplicationActionTypes.CHANGE_COMPONENT:
      return produce(state, (draft) => {
        draft.firstLogin.component = action.payload;
      });

    default:
      return state;
  }
}
