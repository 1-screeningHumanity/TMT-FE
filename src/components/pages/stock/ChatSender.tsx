'use client'

import { useToast } from '@/components/ui/use-toast'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
export default function ChatSender({
  newChat,
}: {
  newChat: (formData: FormData) => Promise<boolean>
}) {
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return
    const formData = new FormData(form)
    const res = await newChat(formData)

    if (!res) {
      toast({
        title: '메시지를 전송실패하였습니다.',
        variant: 'destructive',
      })
    }
    form.reset()
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto' // Reset height after sending message
    }
  }

  const autoResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.addEventListener('input', autoResize)
      autoResize() // 초기 높이 조정
    }

    return () => {
      if (textareaRef.current) {
        textareaRef.current.removeEventListener('input', autoResize)
      }
    }
  }, [])
  return (
    <div className="fixed bottom-5 w-full z-20 px-2">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="flex justify-between h-auto rounded-3xl bg-white w-full relative">
          <textarea
            ref={textareaRef}
            name="message"
            placeholder="메시지를 입력하세요."
            className="overflow-hidden resize-none w-10/12 "
            aria-label="Message input"
            style={{ boxSizing: 'border-box' }}
          />

          <button
            type="submit"
            className="w-[50px] h-[50px] bg-blue-500 text-white rounded-full flex justify-center items-center absolute right-2 top-1/2 transform -translate-y-1/2"
            aria-label="Send message"
          >
            <Image
              src={'/assets/images/send.svg'}
              alt="전송"
              width={24}
              height={24}
            />
          </button>
        </div>
      </form>
    </div>
  )
}
