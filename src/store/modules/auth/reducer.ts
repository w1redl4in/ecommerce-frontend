import produce from 'immer';
import { IReducerAction } from '../../rootReducer';
import { IAuthState, ILogin, IRegister, AuthActionTypes } from './';

const initialState: IAuthState = {
  login: {} as ILogin,
  register: {} as IRegister,
  isLoading: false,
};

export default function authReducer(
  state = initialState,
  action: IReducerAction<ILogin | IRegister | string | { token: string }>
) {
  switch (action.type) {
    case AuthActionTypes.FETCH_LOGIN:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });

    case AuthActionTypes.FETCH_LOGIN_SUCCESS:
      return produce(state, (draft) => {
        const { token } = action.payload as { token: string };
        console.log(token);
        draft.isLoading = false;
        sessionStorage.setItem('token', token);
      });

    case AuthActionTypes.FETCH_LOGIN_ERROR:
      return produce(state, (draft) => {
        draft.isLoading = false;
        sessionStorage.setItem('token', '');
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

    default:
      return state;
  }
}
