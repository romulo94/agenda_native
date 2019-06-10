/* eslint-disable import/prefer-default-export */
import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as UsersActions } from '../ducks/users';

export function* addUser(action) {
  try {
    const { email, password } = action.payload;
    const { data } = yield call(api.post, '/login', { email, password });

    yield put(UsersActions.addUserSuccess(data.token));
  } catch (err) {
    yield put(UsersActions.addUserFailure('Erro ao adicionar Usuário!'));
  }
}
