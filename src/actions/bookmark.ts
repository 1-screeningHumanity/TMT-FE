import { bookmarkDataType } from '@/types/Stock'
import { DeleteAPI, GetAPI, PostAPI } from './fetchAPI'
import { getAccessToken } from './tokens'

async function GetBookMarkAPI(stockCode: string) {
  const token = await getAccessToken()
  const res = await GetAPI(
    `/member-mypage/bookmark?stockCode=${stockCode}`,
    undefined,
    token,
  )
  return res
}
async function PostBookMarkAPI(bookmark: bookmarkDataType) {
  const token = await getAccessToken()
  const res = await PostAPI('/member-mypage/bookmark', bookmark, token)
  return res
}
async function DeleteBookMarkAPI(stockCode: string) {
  const token = await getAccessToken()
  const res = await DeleteAPI(
    `/member-mypage/bookmark?stockCode=${stockCode}`,
    undefined,
    token,
  )
  return res
}

async function GetBookMartListAPI() {
  const token = await getAccessToken();
  const res = await GetAPI('/member-mypage/bookmark/list', undefined, token);
  return res;
}

export { GetBookMarkAPI, PostBookMarkAPI, DeleteBookMarkAPI, GetBookMartListAPI }
