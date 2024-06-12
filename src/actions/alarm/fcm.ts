import { DeleteAPI, GetAPI, PostAPI } from '../FetchAPI'
import { getAccessToken } from '../tokens'

const token = getAccessToken()
async function fcmSendAPI(fcmToken: string) {
  const res = await PostAPI(
    '/notification/notification/fcm-token',
    { fcmToken },
    await token,
  )

  return token
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
