import * as axiosWrapper from '../../../../utilities/axios-utils'

export const create = {
  formatUrl: () => `/auth/register`,
  request: (url, body) => axiosWrapper.post(url, body)
}
