import { getAccessToken } from '@/actions/tokens'
import ChatRoom from '@/components/pages/stock/ChatRoom'
import ChatSender from '@/components/pages/stock/ChatSender'
import { chatSender } from '@/types/Chat'

export default function Page({ params }: { params: { StockCode: string } }) {
  const stockCode = params.StockCode
  async function newChat(formData: FormData) {
    'use server'
    const rawFormData: chatSender = {
      stockCode: stockCode,
      message: formData.get('message') as string,
    }
    console.log('raw@@@@@@@@@@@@@@@', rawFormData)
    if (!rawFormData.message) return
    const token = await getAccessToken()
    const response = await fetch(`${process.env.API_BASE_URL}/stocitem/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(rawFormData),
    })

    const data = await response.json()
    return
  }

  return (
    <main className="m-3">
      <ChatRoom />
      <ChatSender newChat={newChat} />
    </main>
  )
}
