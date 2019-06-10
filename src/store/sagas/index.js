import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsersTypes } from '../ducks/users';
import { Types as EventsTypes } from '../ducks/events';
import { addUser } from './users';
import { addEvent } from './events';

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.ADD_REQUEST, addUser),
    takeLatest(EventsTypes.ADD_REQUEST, addEvent),
  ]);
}
