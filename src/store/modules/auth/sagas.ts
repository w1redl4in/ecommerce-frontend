import { notification } from 'antd';
import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  fetchLoginActionSuccess,
  fetchLoginActionError,
  fetchRegisterActionError,
  fetchRegisterActionSuccess,
  AuthActionTypes,
  ILogin,
  IRegister,
} from '.';
import { ecommerceApi } from '../../../services/api';
import { IReducerAction } from '../../rootReducer';

export function* fetchLoginSaga(action: IReducerAction<ILogin>) {
  try {
    const { email, password } = action.payload;
    const response = yield call(ecommerceApi.post, `/auth`, {
      email,
      password,
    });
    yield put(fetchLoginActionSuccess(response.data));
    notification.success({
      message: 'Autenticação',
      description:
        'Autenticação realizada com sucesso. Você será redirecionado em poucos segundos.',
      placement: 'topLeft',
    });
  } catch (error) {
    yield put(fetchLoginActionError());
    notification.error({
      message: 'Autenticação',
      description: error.response.data.errors.map((err) => err.message),
      placement: 'topLeft',
    });
  }
}

export function* fetchRegisterSaga(action: IReducerAction<IRegister>) {
  try {
    const { name, email, password } = action.payload;
    yield call(ecommerceApi.post, `/users`, {
      name,
      email,
      password,
    });
    yield put(fetchRegisterActionSuccess());
    notification.success({
      message: 'Cadastro',
      description:
        'Estamos processando o seu cadastro, você receberá um e-mail em breve.',
      placement: 'topLeft',
    });
  } catch (error) {
    yield put(fetchRegisterActionError());
    notification.error({
      message: 'Cadastro',
      description: error.response.data.errors.map((err) => err.message),
      placement: 'topLeft',
    });
  }
}

export default all([
  takeLatest(AuthActionTypes.FETCH_LOGIN, fetchLoginSaga),
  takeLatest(AuthActionTypes.FETCH_REGISTER, fetchRegisterSaga),
]);
