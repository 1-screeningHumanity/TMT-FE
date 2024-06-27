import { userInformation } from '@/actions/myPage'
import { getOldChatDAtaAPI } from '@/actions/stock/stock'
import { getAccessToken } from '@/actions/tokens'
import ChatRoom from '@/components/pages/stock/ChatRoom'
import ChatSender from '@/components/pages/stock/ChatSender'
import { chatSender } from '@/types/Chat'
export default async function Page({
  params,
}: {
  params: { StockCode: string }
}) {
  const stockCode = params.StockCode
  const getOldChat = await getOldChatDAtaAPI(stockCode, undefined)
  const nickNameRes = await userInformation()
  let nickName = ''
  if (nickNameRes.isSuccess == true) {
    nickName = nickNameRes.data.nickanme
  }

  async function newChat(formData: FormData): Promise<boolean> {
    'use server'
    const rawFormData: chatSender = {
      stockCode: stockCode,
      message: formData.get('message') as string,
      nickName: nickName,
    }
    if (!rawFormData.message || !rawFormData.nickName) return false
    const token = await getAccessToken()
    const response = await fetch(`${process.env.API_BASE_URL}/stockitem/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(rawFormData),
    })
    if (!response.ok) {
      return false
    }
    return true
  }

  return (
    <>
      <ChatRoom stockCode={stockCode} nickName={nickName} />
      <ChatSender newChat={newChat} />
    </>
  )
}
