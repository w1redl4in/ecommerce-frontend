import { all } from 'redux-saga/effects';
import { helloWorld as helloWorldSaga } from './modules/helloword';
import authSaga from './modules/auth/sagas';
import forgotPasswordSaga from './modules/forgot-password/sagas';

export default function* rootSaga() {
  return yield all([helloWorldSaga, authSaga, forgotPasswordSaga]);
}
