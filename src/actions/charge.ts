import { PostAPI } from "./fetchAPI";
import { getAccessToken } from "./tokens";

async function postCharge(cash : number) {

  const TOKEN = await getAccessToken();
  const res = await PostAPI(`/payment/charge/won`, { cash }, TOKEN);
  return res;
}

export { postCharge }