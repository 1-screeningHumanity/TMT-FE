'use client'
import { checkTradePassword } from '@/actions/trade'
import { toast } from '@/components/ui/use-toast'
import { useRef, useState } from 'react'

export default function TradePassword({
  step,
  setStep,
}: {
  step: number
  setStep: (value: number) => void
}) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const [password, setPassword] = useState<string>('')

  const handleKeyUp = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const target = e.target as HTMLInputElement
    if (target.value.length === target.maxLength) {
      const nextInput = inputRefs.current[index + 1]
      if (nextInput) {
        nextInput.focus()
      }
    }
    setPassword(inputRefs.current.map((input) => input?.value).join(''))
  }

  const handleCheckPassword = async () => {
    const payingPassword = password
    const res = await checkTradePassword(payingPassword)
    if (res.isSuccess === false) {
      toast({
        title: '결제 비밀번호가 일치하지 않습니다.',
        variant: 'destructive',
      })
      return
    }
    setStep(2)
  }
  return (
    <section className="h-screen">
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold text-2xl text-center mt-20">
          결제 비밀번호를 입력해주세요
        </span>
        <form className="flex justify-center items-center space-x-3 mt-4">
          <input
            className="w-14 h-14 border-[2px] text-center text-xl"
            maxLength={1}
            required
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            ref={(el) => {
              inputRefs.current[0] = el
            }}
            onKeyUp={(e) => handleKeyUp(e, 0)}
          />
          <input
            className="w-14 h-14 border-[2px] text-center text-xl"
            maxLength={1}
            required
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            ref={(el) => {
              inputRefs.current[1] = el
            }}
            onKeyUp={(e) => handleKeyUp(e, 1)}
          />
          <input
            className="w-14 h-14 border-[2px] text-center text-xl"
            maxLength={1}
            required
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            ref={(el) => {
              inputRefs.current[2] = el
            }}
            onKeyUp={(e) => handleKeyUp(e, 2)}
          />
          <input
            className="w-14 h-14 border-[2px] text-center text-xl"
            maxLength={1}
            required
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            ref={(el) => {
              inputRefs.current[3] = el
            }}
            onKeyUp={(e) => handleKeyUp(e, 3)}
          />
        </form>
        <button
          className="w-5/12 h-14 font-bold text-white rounded-2xl absolute bottom-4"
          style={{ backgroundColor: '#7D12FF' }}
          onClick={() => handleCheckPassword()}
        >
          다음으로
        </button>
      </div>
    </section>
  )
}
