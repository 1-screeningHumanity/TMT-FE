'use client'
import { getOldChatDAtaAPI } from '@/actions/stock/stock'
import { ChatMessageDataType } from '@/types/chatMessageDataType'
import { beforeMinute } from '@/utils/formattinfTime'
import { useEffect, useRef, useState, useCallback } from 'react'
import useObserver from '@/utils/useObserver'
import FromChat from './FromChat'
import ToChat from './ToChat'

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
  const observerRef = useRef<HTMLDivElement>(null)
  const lastMessageRef = useRef<HTMLDivElement>(null)
  const loadMoreChats = async () => {
    const res = await getOldChatDAtaAPI(StockCode, lastId)

    setMessageData((prevMessages) => {
      const newMessages = res.filter((msg: ChatMessageDataType) => {
        return !prevMessages.some((prevMsg) => prevMsg.id == msg.id)
      })
      return [...newMessages.reverse(), ...prevMessages]
    })
  }
  useEffect(() => {
    loadMoreChats()
  }, [lastId])

  const moreData = () => {
    if (messageData.length === 0) return
    setLastId(messageData[0].id)
  }
  useEffect(() => {
    console.log(messageData)
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          moreData()
        }
      },
      { threshold: 1 },
    )
    if (observerRef.current) {
      observer.observe(observerRef.current)
    }
  }, [moreData])

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView()
    }
  }, [messageData[messageData.length - 1]])

  useEffect(() => {
    if (!window.EventSource) {
      console.error('EventSource is not supported in this environment.')
      return
    }

    const connectToSSE = () => {
      const eventSource = new EventSource(
        `${process.env.API_BASE_URL}/stockitem/chat/reactive/${StockCode}`,
      )

      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data)
        setMessageData((prevMessages) => [...prevMessages, data])
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
  }, [StockCode]) // Exclude lastId from dependency array to avoid unnecessary reconnects

  return (
    <section className=" mb-32" ref={chatRoomRef}>
      <div ref={observerRef} />
      {messageData.map((msg: ChatMessageDataType, index: number) => (
        <div
          className="flex flex-col"
          key={index}
          ref={index === messageData.length - 1 ? lastMessageRef : null}
        >
          {msg.nickName === nickName ? (
            <ToChat msg={msg} />
          ) : (
            <FromChat msg={msg} />
          )}
        </div>
      ))}
    </section>
  )
}
