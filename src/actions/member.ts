"use server"

import { DeleteAPI, GetAPI, PatchAPI, PostAPI } from "./fetchAPI";
import { getAccessToken } from "./tokens";

async function postSignOut() {

  const TOKEN = await getAccessToken();
  const res = await PostAPI(`/member/signout`, undefined, TOKEN)
  return res
}

async function deleteMember() {

  const TOKEN = await getAccessToken();
  const res = await DeleteAPI(`/member/`, undefined, TOKEN);
  return res
}

async function getRandomNickname() {

  const res = await GetAPI(`/member/random-nickname`)
  return res
}

async function postSignup(
  name: string | undefined,
  phoneNumber: string | undefined,
  password: string | undefined,
  nickname: string | undefined,
) {
  const res = await PostAPI('/member/signup', {
    name: name,
    phoneNumber: phoneNumber,
    password: password,
    nickname: nickname,
  })
  return res
}

async function postPayPassword(nickname : string | null, password : string | undefined) {

  const res = await PostAPI(`/member/pay-password`, { nickname, payingPassword : password });
  return res;
}

async function patchResetPassword(name : string | undefined, phoneNumber : string | undefined, password : string | undefined) {

  const res = await PatchAPI(`/member/reset/password`, { name, phoneNumber, password });
  return res;
}

export { postSignOut, deleteMember, getRandomNickname, postSignup, postPayPassword, patchResetPassword}