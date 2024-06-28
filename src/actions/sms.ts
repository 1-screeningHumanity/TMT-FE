import { PostAPI } from "./fetchAPI";

async function sendSms(phoneNumber: string | undefined) {
  
  const res = await PostAPI(`/member/sms/send`, {phoneNumber});
  return res;
}

async function verifySms(phoneNumber: string | undefined, verifyCode: string) {

  const res = await PostAPI(`/member/sms/verify`, {phoneNumber, verifyCode});
  return res;
}

export { sendSms, verifySms }