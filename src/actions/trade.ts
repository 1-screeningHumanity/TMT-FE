import { DeleteAPI } from "./fetchAPI";
import { getAccessToken } from "./tokens";

async function cancleReservationBuy(id : number) {
  
  const TOKEN = await getAccessToken();
  const res = await DeleteAPI(`/trade/reservation/buy/${id}`, undefined, TOKEN);
  return res;
}

async function cancleReservationSale(id : number) {
  
  const TOKEN = await getAccessToken();
  const res = await DeleteAPI(`/trade/reservation/sale/${id}`, undefined, TOKEN);
  return res;
}

export { cancleReservationBuy, cancleReservationSale}