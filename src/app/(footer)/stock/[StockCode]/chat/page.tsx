import { getAccessToken } from '@/actions/tokens'
import ChatRoom from '@/components/pages/stock/ChatRoom'
import ChatSender from '@/components/pages/stock/ChatSender'
import { chatSender } from '@/types/Chat'
export default function Page({ params }: { params: { StockCode: string } }) {
  const stockCode = params.StockCode

  async function newChat(formData: FormData): Promise<boolean> {
    'use server'
    const rawFormData: chatSender = {
      stockCode: stockCode,
      message: formData.get('message') as string,
    }
    if (!rawFormData.message) return false
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
    <main className="m-3">
      <ChatRoom />
      <ChatSender newChat={newChat} />
    </main>
  )
}
