import { kakaoPayApprove, kakaoPayReady } from "@/types/payments";
import { GetAPI, PostAPI } from "./fetchAPI";
import { getAccessToken } from "./tokens";



async function postKakaopayReady(kakaopayReady : kakaoPayReady) {
  
  const TOKEN = await getAccessToken();
  const res = await PostAPI(`/payment/kakaopay`, kakaopayReady, TOKEN)
  return res
}

async function postKakaopayApprove(kakaopayApprove : kakaoPayApprove) {
  
  const TOKEN = await getAccessToken();
  const res = await PostAPI(`/payment/kakaopay/approve`, kakaopayApprove, TOKEN)
  return res
}

async function getPaymentsLog() {

  const token = await getAccessToken()
  const res = await GetAPI('/payment/log/info', undefined, token)
  return res
}


export { postKakaopayReady, postKakaopayApprove, getPaymentsLog }