import { DeleteAPI, GetAPI, PostAPI } from '../FetchAPI'
import { getAccessToken } from '../tokens'

const token = getAccessToken()
async function fcmSendAPI(fcmToken: string, accessToken: string) {
  const res = await PostAPI(
    '/notification/fcm-token',
    { fcmToken },
    accessToken,
  )

  return res
}
async function alarmListAPI() {
  const res = await GetAPI('/notification', undefined, await token)
  return res
}
async function alarmReadAPI(alarmId: string) {
  const res = await PostAPI('/notification', { alarmId }, await token)
  return res
}
async function alarmDeleteAPI(alarmId: string[]) {
  const res = await DeleteAPI('/notification', { alarmId }, await token)
  return res
}

export { fcmSendAPI, alarmListAPI, alarmReadAPI, alarmDeleteAPI }
