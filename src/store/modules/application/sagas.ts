import { all, call, takeLatest } from 'redux-saga/effects';
import { IReducerAction } from '../../rootReducer';
import { ApplicationActionTypes } from '.';
import { ecommerceApi } from '../../../services/api';
import { notification } from 'antd';

export function* applicationSaga(action: IReducerAction<string>) {
  try {
    const image = action.payload;
    const token = sessionStorage.getItem('token');
    yield call(
      ecommerceApi.patch,
      '/users/image',
      {
        image,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    notification.error({
      message: 'Envio de imagem',
      description:
        error.response.data.errors.map((err) => err.message) ||
        'Houve um erro inesperado, tente novamente mais tarde.',
      placement: 'topLeft',
    });
  }
}

export default all([
  takeLatest(ApplicationActionTypes.SET_IMAGE, applicationSaga),
]);
