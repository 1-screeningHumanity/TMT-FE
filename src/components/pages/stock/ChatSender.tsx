'use client'

import { useToast } from '@/components/ui/use-toast'
import { useRef } from 'react'

export default function ChatSender({
  newChat,
}: {
  newChat: (formData: FormData) => Promise<boolean>
}) {
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)
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
  }

  return (
    <div className="fixed bottom-16 w-full z-20 bg-slate-100">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="flex justify-between w-full h-12">
          <input
            type="text"
            name="message"
            placeholder="메시지를 입력하세요."
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            className="w-11/12 h-full bg-transparent focus:outline-none"
            aria-label="Message input"
          />
          <button
            type="submit"
            className="w-1/12 h-full bg-blue-500 text-white"
            aria-label="Send message"
          >
            전송
          </button>
        </div>
      </form>
    </div>
  )
}
