import produce from 'immer';
import { IReducerAction } from '../../rootReducer';
import {
  IUserState,
  ILogin,
  IRegister,
  IUser,
  UserActionTypes,
  LoginSuccessPayload,
  IFirstLogin,
} from './';
import history from '../../../services/history';

const initialState: IUserState = {
  isLoading: false,
  user: {} as IUser,
  firstLogin: {} as IFirstLogin,
};

export default function userReducer(
  state = initialState,
  action: IReducerAction<
    ILogin | IRegister | string | LoginSuccessPayload | IUser
  >
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

    case UserActionTypes.FETCH_USER_DATA:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });

    case UserActionTypes.FETCH_USER_DATA_SUCCESS:
      return produce(state, (draft) => {
        draft.isLoading = false;
        const {
          email,
          firstLogin,
          created_at,
          id,
          imageUrl,
          name,
          updated_at,
        } = action.payload as IUser;

        draft.user.imageUrl = imageUrl;
        draft.user.email = email;
        draft.user.firstLogin = firstLogin;
        draft.user.created_at = created_at;
        draft.user.id = id;
        draft.user.name = name;
        draft.user.updated_at = updated_at;
      });

    case UserActionTypes.FETCH_USER_DATA_ERROR:
      return produce(state, (draft) => {
        draft.isLoading = false;
      });

    default:
      return state;
  }
}
