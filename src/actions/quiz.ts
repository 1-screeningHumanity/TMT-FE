import exp from "constants";
import { GetAPI } from "./fetchAPI";
import { getAccessToken } from "./tokens";

async function quiz() {
  
  const token = await getAccessToken();
  const res = GetAPI("/member-mypage/quiz",undefined, token);
  return res;
}

export { quiz }