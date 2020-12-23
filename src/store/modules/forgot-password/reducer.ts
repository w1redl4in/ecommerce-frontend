import produce from 'immer';
import { IReducerAction } from '../../rootReducer';
import { ForgotPasswordActionTypes, IForgotPasswordState } from './';

const initialState: IForgotPasswordState = {
  isLoading: false,
  visible: false,
};

export default function forgotPasswordReducer(
  state = initialState,
  action: IReducerAction<any>
) {
  switch (action.type) {
    case ForgotPasswordActionTypes.OPEN_MODAL:
      return produce(state, (draft) => {
        draft.visible = true;
      });

    case ForgotPasswordActionTypes.CLOSE_MODAL:
      return produce(state, (draft) => {
        draft.visible = false;
      });

    case ForgotPasswordActionTypes.FETCH_FORGOT_PASSWORD:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });

    case ForgotPasswordActionTypes.FETCH_FORGOT_PASSWORD_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
      });

    case ForgotPasswordActionTypes.FETCH_FORGOT_PASSWORD_ERROR:
      return produce(state, (draft) => {
        draft.isLoading = false;
      });

    default:
      return state;
  }
}
