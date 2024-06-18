'use server'

import { PatchAPI, PostAPI } from "./fetchAPI";
import { getAccessToken } from "./tokens";

async function patchPasswordChange(password : string | undefined) {

  const TOKEN = await getAccessToken();
  const res = await PatchAPI("/member/password", {password}, TOKEN)
  return res
}

async function patchPaypasswordChange(payingPassword : string | undefined) {

  const TOKEN = await getAccessToken();
  const res = await PatchAPI("/member/password", {payingPassword}, TOKEN)
  return res
}

async function postNicknameChange(nickname : string | null) {

  const TOKEN = await getAccessToken();
  const res = await PostAPI("/member/nickname", {nickname}, TOKEN)
  return res
}

export { patchPasswordChange, patchPaypasswordChange, postNicknameChange}