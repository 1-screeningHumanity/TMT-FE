import exp from "constants";
import { DeleteAPI, GetAPI, PostAPI } from "./fetchAPI";
import { getAccessToken } from "./tokens";

async function isSubscribed(nickName: string){
  const token = await getAccessToken();
  const url = `/member-mypage/subscribe?nickName=${nickName}`;
  const res = await GetAPI(url, undefined, token);
  return res
}

async function subscribe(subscriberNickName: string, subscribedNickName: string, cash : number){
  const token = await getAccessToken();
  const res = PostAPI(`/member-mypage/subscribe`, {subscriberNickName, subscribedNickName, cash}, token);
  return res
}

async function unsubscribe(nickName: string){
  const token = await getAccessToken();
  const url = `/member-mypage/subscribe?nickName=${nickName}`;
  const res = DeleteAPI(url, undefined, token);
  return res
}

async function getFollowerList(myNickName:string) {
  const token = await getAccessToken();
  const res = GetAPI(`/member-mypage/subscribe/follower?myNickName=${myNickName}`, undefined, token);
  return res
}

async function getFollowingList(myNickName:string) {
  const token = await getAccessToken();
  const res = GetAPI(`/member-mypage/subscribe/following?myNickName=${myNickName}`, undefined, token);
  return res
}

export { isSubscribed , subscribe, unsubscribe, getFollowerList, getFollowingList }