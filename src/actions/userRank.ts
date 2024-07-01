import { GetAPI } from "./fetchAPI";
import { getAccessToken } from "./tokens";

async function getAssetRank(page : number){
  const res = await GetAPI(`/rank/asset?page=${page}&size=20`);
  return res
}

async function getMyAssetRank(){
  const token = await getAccessToken();
  const res = await GetAPI("/rank/my-asset", undefined, token);
  return res
}

async function getDailyRevenueRank(){
  const res = await GetAPI("/rank/revenue");
  return res
}

async function getMyDailyRevenueRank(){
  const token = await getAccessToken();
  const res = await GetAPI("/rank/my-revenue", undefined, token);
  return res
}

async function getWeeklyRevenueRank(){
  const res = await GetAPI("/rank/weekly/revenue");
  return res
}

async function getMyWeeklyRevenueRank(){
  const token = await getAccessToken();
  const res = await GetAPI("/rank/weekly/my-revenue", undefined, token);
  return res
}

async function getMonthlyRevenueRank(){
  const res = await GetAPI("/rank/monthly/revenue");
  return res
}

async function getMyMonthlyRevenueRank(){
  const token = await getAccessToken();
  const res = await GetAPI("/rank/monthly/my-revenue", undefined, token);
  return res
}

export { getAssetRank, getMyAssetRank, getDailyRevenueRank, getMyDailyRevenueRank, getWeeklyRevenueRank, getMyWeeklyRevenueRank, getMonthlyRevenueRank, getMyMonthlyRevenueRank }