import { all } from 'redux-saga/effects';
import { helloWorld as helloWorldSaga } from './modules/helloword';

export default function* rootSaga() {
  return yield all([helloWorldSaga]);
}
