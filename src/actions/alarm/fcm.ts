import { DeleteAPI, GetAPI, PostAPI } from '../fetchAPI'
import { getAccessToken } from '../tokens'

const token = getAccessToken()
console.log('token in fcm.ts :', token)
async function fcmSendAPI(fcmToken: string, accessToken: string) {
  const res = await PostAPI(
    '/notification/fcm-token',
    { fcmToken },
    accessToken,
  )

  return res
}
async function alarmListAPI() {
  const res = await GetAPI('/notification/', undefined, await token)
  return res
}
async function alarmReadAPI(notificationIds: string[]) {
  const res = await PostAPI('/notification', { notificationIds }, await token)
  return res
}
async function alarmDeleteAPI(notificationIds: string[]) {
  const res = await DeleteAPI('/notification', { notificationIds }, await token)
  return res
}

export { fcmSendAPI, alarmListAPI, alarmReadAPI, alarmDeleteAPI }
