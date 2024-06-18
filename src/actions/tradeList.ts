import { GetAPI } from "./fetchAPI";
import { getAccessToken } from "./tokens";

export async function getTradeList() {

  const token = await getAccessToken()
  const res = await GetAPI('/trade/trade-lists', undefined, token)
  return res
}

export async function getReservationTradeList() {
  
  const token = await getAccessToken()
  const res = await GetAPI('/trade/reservation/trade-lists', undefined, token)
  return res
}

