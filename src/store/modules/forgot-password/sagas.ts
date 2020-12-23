import { all, put, takeLatest, call } from 'redux-saga/effects';
import { notification } from 'antd';
import { ecommerceApi } from '../../../services/api';
import { IReducerAction } from '../../rootReducer';
import {
  ForgotPasswordActionTypes,
  IEmail,
  fetchForgotPasswordActionSuccess,
  fetchForgotPasswordActionError,
} from './';
import { closeForgotPasswordModal } from './actions';

function* fetchForgotPasswordSaga(action: IReducerAction<IEmail>) {
  try {
    const { email } = action.payload;
    yield call(ecommerceApi.post, '/users/recovery', {
      email,
    });
    yield put(fetchForgotPasswordActionSuccess());
    notification.success({
      message: 'Recuperação de senha',
      description: 'Enviamos um e-mail com a sua senha.',
      placement: 'topLeft',
    });
    yield put(closeForgotPasswordModal());
  } catch (error) {
    yield put(fetchForgotPasswordActionError());
    notification.error({
      message: 'Recuperação de senha',
      description:
        error.response.data.errors.map((err) => err.message) ||
        'Houve um erro inesperado, tente novamente mais tarde.',
      placement: 'topLeft',
    });
  }
}

export default all([
  takeLatest(
    ForgotPasswordActionTypes.FETCH_FORGOT_PASSWORD,
    fetchForgotPasswordSaga
  ),
]);
