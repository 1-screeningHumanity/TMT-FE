'use server'

import { getSession } from "next-auth/react";

export async function getAccessToken(){
  const token = await getSession();
  console.log("token in tokens.ts :", token);
  
  const accessToken = `Bearer ${token?.user.data.accessToken}`;
  return accessToken;
}
export async function getRefreshToken(){
  const token = await getSession();
  const refreshToken = `Bearer ${token?.user.data.refreshToken}`;
  return refreshToken;
}