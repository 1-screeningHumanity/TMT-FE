import { GetAPI } from './fetchAPI'
import { getAccessToken } from './tokens'

async function wonInfoAPI() {
  const token = await getAccessToken()
  const res = await GetAPI('/payment/woninfo', undefined, token)
  return res
}
export { wonInfoAPI }
