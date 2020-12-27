import { all } from 'redux-saga/effects';
import { helloWorld as helloWorldSaga } from './modules/helloword';
import userSaga from './modules/user/sagas';
import forgotPasswordSaga from './modules/forgot-password/sagas';

export default function* rootSaga() {
  return yield all([helloWorldSaga, userSaga, forgotPasswordSaga]);
}
