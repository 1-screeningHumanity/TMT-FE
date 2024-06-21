'use client'
import { userInformation } from '@/actions/myPage'
import { chatMessage } from '@/lib/chatmessage'
import { beforeMinute } from '@/utils/formattinfTime'
import { useEffect, useState } from 'react'

export default function ChatRoom(stockCode: { stockCode: string }) {
  const message = chatMessage
  const StockCode = stockCode.stockCode

  const [messageData, setMessageData] = useState<ChatMessageDataType[]>([])
  useEffect(() => {
    if (!window.EventSource) {
      console.error('EventSource is not supported in this environment.')
      return
    }
    const connetToSSE = () => {
      const eventSource = new EventSource(
        `${process.env.API_BASE_URL}/stockitem/chat/${StockCode}`,
      )

      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data)
        setMessageData((prevMessages) => {
          const isDuplicate = prevMessages.some((msg) => msg.id == data.id)
          if (!isDuplicate) {
            return [...prevMessages, data]
          }

          return prevMessages
        })
      }
      eventSource.onerror = (error) => {
        console.log(error)
      }
      return eventSource
    }
    const eventSource = connetToSSE()
    return () => {
      eventSource.close()
    }
  }, [StockCode])

  return (
    <section className="flex flex-col mb-32">
      {messageData.map((msg) =>
        // 백엔드에서 현재 닉네임이 아닌 uuid 만 나옴 곧 닉네임 나오게 수정하신다고 합니다. 일단 uuid 랑 본인 같으면 오른쪽으로 나오게 수정했습니다.
        msg.sender != 'c583a6d3-bcc8-4e00-a0ca-466be206fffe' ? (
          <div key={msg.id} className="speech-bubble">
            <div className="font-semibold">{msg.sender}</div>
            <div>{msg.message}</div>
            <div className="relative p-2">
              <span className="text-xs absolute right-0 bottom-0 pb-2 mr-2">
                {beforeMinute(msg.createAt)}
              </span>
            </div>
          </div>
        ) : (
          <div key={msg.id} className="tospeech-bubble">
            <div className="font-semibold">{msg.sender}</div>
            <div>{msg.message}</div>
            <div className="relative p-2">
              <span className="text-xs absolute right-0 bottom-0 pb-2 mr-2">
                {beforeMinute(msg.createAt)}
              </span>
            </div>
          </div>
        ),
      )}
    </section>
  )
}
