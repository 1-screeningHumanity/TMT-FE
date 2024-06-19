import { kakaoPayApprove, kakaoPayReady } from "@/types/payments";
import { GetAPI, PostAPI } from "./fetchAPI";
import { getAccessToken } from "./tokens";



async function postKakaopayReady( itemName : string | null,
                                  quantity : number | null,
                                  totalAmount : number | null ) {
  const TOKEN = await getAccessToken();
  const res = await PostAPI(`/payment/kakaopay`, {itemName, quantity, totalAmount}, TOKEN)
  return res
}

async function postKakaopayApprove(tid : string | null,
                                    partner_order_id : string | null,
                                    pgToken : string | null ) {
  const TOKEN = await getAccessToken();
  const res = await PostAPI(`/payment/kakaopay/approve`, {tid, partner_order_id, pgToken}, TOKEN)
  return res
}

async function getPaymentsLog() {

  const token = await getAccessToken()
  const res = await GetAPI('/payment/log/info', undefined, token)
  return res
}


export { postKakaopayReady, postKakaopayApprove, getPaymentsLog }