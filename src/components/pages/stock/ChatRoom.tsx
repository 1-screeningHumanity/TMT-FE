'use client'
import { getOldChatDAtaAPI } from '@/actions/stock/stock'
import { ChatMessageDataType } from '@/types/chatMessageDataType'
import { beforeMinute } from '@/utils/formattinfTime'
import { useEffect, useRef, useState, useCallback } from 'react'
import useObserver from '@/utils/useObserver'

export default function ChatRoom({
  stockCode,
  nickName,
}: {
  stockCode: string
  nickName: string
}) {
  const StockCode = stockCode
  const [messageData, setMessageData] = useState<ChatMessageDataType[]>([])
  const [lastId, setLastId] = useState<string>('')
  const chatRoomRef = useRef<HTMLDivElement>(null)
  const [scrollHeight, setScrollHeight] = useState<number>(0)
  useEffect(() => {
    console.log('fdmkslfnkldsnfjks')
    const loadMoreChats = async () => {
      const res = await getOldChatDAtaAPI(StockCode, lastId)

      setMessageData((prevMessages) => {
        const newMessages = res.filter((msg: any) => {
          return !prevMessages.some((prevMsg) => prevMsg.id == msg.id)
        })
        return [...newMessages.reverse(), ...prevMessages]
      })
    }
    loadMoreChats()
  }, [lastId])
  const moreData = () => {
    if (messageData.length === 0) return
    setLastId(messageData[0].id)
  }
  console.log('messageData', messageData)
  useEffect(() => {
    console.log('어디서 걸리노 씨빠ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ')
    if (chatRoomRef.current) {
      // lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
      chatRoomRef.current.scrollTop = chatRoomRef.current.scrollHeight
    }
  }, [])

  // useEffect(() => {
  //   console.log('계사아아아아아아안')

  //   if (!chatRoomRef) return
  //   if (chatRoomRef.current) {
  //     const scrollTop = chatRoomRef.current.scrollHeight - scrollHeight
  //     chatRoomRef.current.scrollTop = scrollTop
  //     setScrollHeight(chatRoomRef.current.scrollHeight)
  //   }
  // }, [messageData])

  // console.log('messageData', messageData)
  // useEffect(() => {
  //   if (!window.EventSource) {
  //     console.error('EventSource is not supported in this environment.')
  //     return
  //   }

  //   const connectToSSE = () => {
  //     const eventSource = new EventSource(
  //       `${process.env.API_BASE_URL}/stockitem/chat/reactive/${StockCode}`,
  //     )

  //     eventSource.onmessage = (event) => {
  //       const data = JSON.parse(event.data)
  //       setMessageData((prevMessages) => {
  //         const isDuplicate = prevMessages.some((msg) => msg.id === data.id)
  //         if (!isDuplicate) {
  //           return [...prevMessages, data]
  //         }
  //         return prevMessages
  //       })
  //     }

  //     eventSource.onerror = (error) => {
  //       console.error('EventSource failed:', error)
  //       eventSource.close()
  //     }

  //     return eventSource
  //   }

  //   const eventSource = connectToSSE()
  //   return () => {
  //     eventSource.close()
  //   }
  // }, [StockCode]) // Exclude lastId from dependency array to avoid unnecessary reconnects
  // const observerRef = useObserver({
  //   onIntersect: loadMoreChats,
  //   enabled: true,
  // })

  return (
    <section className="flex flex-col mb-32" ref={chatRoomRef}>
      <button onClick={() => moreData()}>더 부르기</button>
      {messageData.map((msg) => {
        return msg.nickName !== nickName ? (
          <div key={msg.id} className="speech-bubble">
            <div className="font-semibold">{msg.nickName}</div>
            <div>{msg.message}</div>
            <div className="relative p-2">
              <span className="text-xs absolute right-0 bottom-0 pb-2 mr-2">
                {beforeMinute(msg.createAt)}
              </span>
            </div>
          </div>
        ) : (
          <div key={msg.id} className="tospeech-bubble">
            <div className="font-semibold">{msg.nickName}</div>
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
