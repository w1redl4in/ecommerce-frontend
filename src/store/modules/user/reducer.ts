import produce from 'immer';
import { IReducerAction } from '../../rootReducer';
import {
  IUserState,
  ILogin,
  IRegister,
  IUser,
  UserActionTypes,
  LoginSuccessPayload,
} from './';
import history from '../../../services/history';

const initialState: IUserState = {
  isLoading: false,
  user: {} as IUser,
};

export default function userReducer(
  state = initialState,
  action: IReducerAction<ILogin | IRegister | string | LoginSuccessPayload>
) {
  switch (action.type) {
    case UserActionTypes.FETCH_LOGIN:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });

    case UserActionTypes.FETCH_LOGIN_SUCCESS:
      return produce(state, (draft) => {
        const { token, user } = action.payload as LoginSuccessPayload;
        draft.user = user;
        draft.isLoading = false;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(user));
      });

    case UserActionTypes.FETCH_LOGIN_ERROR:
      return produce(state, (draft) => {
        draft.isLoading = false;
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
      });

    case UserActionTypes.FETCH_REGISTER:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });

    case UserActionTypes.FETCH_REGISTER_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
      });

    case UserActionTypes.FETCH_REGISTER_ERROR:
      return produce(state, (draft) => {
        draft.isLoading = false;
      });

    case UserActionTypes.SIGN_OUT:
      return produce(state, (draft) => {
        draft.isLoading = false;
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        history.push('/');
      });

    default:
      return state;
  }
}
