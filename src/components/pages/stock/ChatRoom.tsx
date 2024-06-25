'use client'
import { userInformation } from '@/actions/myPage'
import { chatMessage } from '@/lib/chatmessage'
import { beforeMinute } from '@/utils/formattinfTime'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function ChatRoom(stockCode: { stockCode: string }) {
  const StockCode = stockCode.stockCode

  const [messageData, setMessageData] = useState<ChatMessageDataType[]>([])
  const lastMessageRef = useRef<HTMLDivElement>(null)

  const [lastId, setLastId] = useState<string>(' ')
  const chatRoomRef = useRef<HTMLDivElement>(null)
  // console.log(messageData)
  // const observeIntersection = useCallback(() => {
  //   if (chatRoomRef.current) {
  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting && messageData[0] != undefined) {
  //           console.log('intersected')
  //           setLastId(messageData[0].id)
  //         }
  //       })
  //     })
  //     observer.observe(chatRoomRef.current)
  //     return () => observer.disconnect()
  //   }
  // }, [chatRoomRef])
  // console.log(lastId)

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    // if (inView) {
    //   console.log(inView)
    //   if (messageData[0] != undefined) {
    //     setLastId(messageData[0].id)
    //   }
    // }
  }, [messageData])
  // useEffect(() => {
  //   observeIntersection()
  // }, [observeIntersection])

  useEffect(() => {
    if (!window.EventSource) {
      console.error('EventSource is not supported in this environment.')
      return
    }

    const connectToSSE = () => {
      const eventSource = new EventSource(
        `${process.env.API_BASE_URL}/stockitem/chat/${StockCode}?lastId=${lastId}`,
        // https://screeninghumanity.shop/api/v1/stockitem/chat/005830?lastId=6678fc576553d06892097977
      )

      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data)
        setMessageData((prevMessages) => {
          const isDuplicate = prevMessages.some((msg) => msg.id === data.id)
          if (!isDuplicate) {
            return [...prevMessages, data]
          }
          return prevMessages
        })
      }

      eventSource.onerror = (error) => {
        console.error('EventSource failed:', error)
        eventSource.close()
      }

      return eventSource
    }

    const eventSource = connectToSSE()
    return () => {
      eventSource.close()
    }
  }, [StockCode, lastId]) // Include lastId in dependency array

  return (
    <section className="flex flex-col mb-32" ref={chatRoomRef}>
      {messageData.map((msg, index) => {
        return msg.sender !== 'c583a6d3-bcc8-4e00-a0ca-466be206fffe' ? (
          <div
            key={msg.id}
            className="speech-bubble"
            ref={index === messageData.length - 1 ? lastMessageRef : null}
          >
            <div className="font-semibold">{msg.sender}</div>
            <div>{msg.message}</div>
            <div className="relative p-2">
              <span className="text-xs absolute right-0 bottom-0 pb-2 mr-2">
                {beforeMinute(msg.createAt)}
              </span>
            </div>
          </div>
        ) : (
          <div
            key={msg.id}
            className="tospeech-bubble"
            ref={index === messageData.length - 1 ? lastMessageRef : null}
          >
            <div className="font-semibold">{msg.sender}</div>
            <div>{msg.message}</div>
            <div className="relative p-2">
              <span className="text-xs absolute right-0 bottom-0 pb-2 mr-2">
                {beforeMinute(msg.createAt)}
              </span>
            </div>
          </div>
        )
      })}
    </section>
  )
}
