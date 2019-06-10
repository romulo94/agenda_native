/* eslint-disable import/prefer-default-export */
import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as EventActions } from '../ducks/events';

export function* addEvent(action) {
  try {
    const response = yield call(api.get, '/events?limit=100&page=1', {
      headers: { token: JSON.stringify(action.payload.token) },
    });

    yield put(EventActions.eventSuccess(response));
  } catch (err) {
    yield put(EventActions.eventFailure('Erro ao adicionar Usuário!'));
  }
}
