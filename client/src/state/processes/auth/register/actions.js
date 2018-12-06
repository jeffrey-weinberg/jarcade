import { call, put, takeLatest } from 'redux-saga/effects'

import * as axiosWrapper from '../../../../utilities/axios-utils'
import TYPES from './types'
import LocalStorage from '../../../../utilities/local-storage'

export const name = 'registerActions'

export function register(password, confirmedPassword) {
  return {
    type: TYPES.REGISTER_USER_REQUEST,
    password,
    confirmedPassword
  }
}

export function* executeRegister({ password, confirmedPassword }) {
  const url = `/auth/register`
  const body = { password, confirmedPassword }
  try {
    const res = yield call(axiosWrapper.post(url, body))
    LocalStorage.set(res.data)
    yield put(registerSuccess(res.data))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function registerSuccess(data) {
  return {
    type: TYPES.REGISTER_USER_SUCCESS,
    user: data.user
  }
}


const sagas = [
  takeLatest(TYPES.REGISTER_USER_REQUEST, executeRegister)
]

export default sagas