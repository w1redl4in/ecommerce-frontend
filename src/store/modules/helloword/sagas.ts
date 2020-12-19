import { all, call, takeLatest } from 'redux-saga/effects';
import { ipApi } from '../../../services/api';
import { HelloWorldActionTypes } from './types';

export function* helloWorld(): Generator {
  try {
    const response = yield call(ipApi.get, '/24.48.0.1');
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

export default all([
  takeLatest(HelloWorldActionTypes.SEND_HELLO_WORLD, helloWorld),
]);
