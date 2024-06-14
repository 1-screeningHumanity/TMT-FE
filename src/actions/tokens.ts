import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";


export async function getAccessToken(){
  const token = await getServerSession(options);  
  const accessToken = `Bearer ${token?.user.data.accessToken}`;
  return accessToken;
}

export async function getRefreshToken(){
  const token = await getServerSession(options);
  const refreshToken = `Bearer ${token?.user.data.refreshToken}`;
  return refreshToken;
} 