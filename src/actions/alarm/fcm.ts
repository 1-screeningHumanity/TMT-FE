import { DeleteAPI, GetAPI, PostAPI } from '../fetchAPI'
import { getAccessToken } from '../tokens'

async function fcmSendAPI(fcmToken: string, accessToken: string) {
  const res = await PostAPI(
    '/notification/fcm-token',
    { fcmToken },
    accessToken,
  )

  return res
}
async function alarmListAPI() {
  const token = await getAccessToken()
  const res = await GetAPI('/notification/', undefined, token)
  return res
}
async function alarmReadAPI(notificationIds: number[]) {
  const token = await getAccessToken()
  const res = await PostAPI('/notification', { notificationIds }, token)
  console.log('res in ala rmReadAPI : ', token)
  return res
}
async function alarmDeleteAPI(notificationIds: number[]) {
  const token = await getAccessToken()
  const res = await DeleteAPI('/notification', { notificationIds }, token)
  return res
}

async function alarmCountAPI() {
  const token = await getAccessToken()
  const res = await GetAPI('/notification/count', undefined, token)
  return res
}
async function deleteTokenAPI(fcmToken: string) {
  const token = await getAccessToken()
  const res = await DeleteAPI('/notification/fcm-token', { fcmToken }, token)
  return res
}
export {
  fcmSendAPI,
  alarmListAPI,
  alarmReadAPI,
  alarmDeleteAPI,
  alarmCountAPI,
  deleteTokenAPI,
}
