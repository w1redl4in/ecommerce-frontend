import produce from 'immer';
import { IReducerAction } from '../../rootReducer';
import {
  IAuthState,
  ILogin,
  IRegister,
  IUser,
  AuthActionTypes,
  LoginSuccessPayload,
} from './';
import history from '../../../services/history';

const initialState: IAuthState = {
  isLoading: false,
  user: {} as IUser,
};

export default function authReducer(
  state = initialState,
  action: IReducerAction<ILogin | IRegister | string | LoginSuccessPayload>
) {
  switch (action.type) {
    case AuthActionTypes.FETCH_LOGIN:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });

    case AuthActionTypes.FETCH_LOGIN_SUCCESS:
      return produce(state, (draft) => {
        const { token, user } = action.payload as LoginSuccessPayload;
        draft.user = user;
        draft.isLoading = false;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(user));
      });

    case AuthActionTypes.FETCH_LOGIN_ERROR:
      return produce(state, (draft) => {
        draft.isLoading = false;
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
      });

    case AuthActionTypes.FETCH_REGISTER:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });

    case AuthActionTypes.FETCH_REGISTER_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
      });

    case AuthActionTypes.FETCH_REGISTER_ERROR:
      return produce(state, (draft) => {
        draft.isLoading = false;
      });

    case AuthActionTypes.SIGN_OUT:
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
