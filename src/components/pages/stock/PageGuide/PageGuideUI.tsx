'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Guide1 from './Guide1'
import Guide2 from './Guide2'
import Guide3 from './Guide3'
import Guide4 from './Guide4'
import Guide5 from './Guide5'
import Guide6 from './Guide6'
import Guide7 from './Guide7'
import Guide8 from './Guide8'
import Guide9 from './Guide9'
import Guide10 from './Guide10'

export default function PageGuideUI({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}) {
  const [step, setStep] = useState(1)
  if (1 > step || step > 10) {
    setIsOpen(false)
  }
  useEffect(() => {
    const mainElement = document.querySelector('body')
    if (isOpen) {
      mainElement?.classList.add('overflow-hidden')
    } else {
      mainElement?.classList.remove('overflow-hidden')
    }
    return () => {
      mainElement?.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <section className="fixed top-0 right-0 bottom-0 left-0 z-[1000] bg-black/50">
      <div
        className="right-0 top-0 absolute m-5 overflow-y-hidden"
        onClick={() => setIsOpen(false)}
      >
        <Image
          src="/assets/images/close.svg"
          alt="close"
          width={25}
          height={25}
        />
      </div>

      {step === 1 && <Guide1 />}
      {step === 2 && <Guide2 />}
      {step === 3 && <Guide3 />}
      {step === 4 && <Guide4 />}
      {step === 5 && <Guide5 />}
      {step === 6 && <Guide6 />}
      {step === 7 && <Guide7 />}
      {step === 8 && <Guide8 />}
      {step === 9 && <Guide9 />}
      {step === 10 && <Guide10 />}

      <div className="flex absolute right-0 bottom-0 m-5 bg-white">
        <div onClick={() => setStep((prev) => prev - 1)}>
          <Image
            src="/assets/images/ArrowLeft.svg"
            alt="arrowLeft"
            width={25}
            height={25}
          />
        </div>
        <span className="mx-4">{step}</span>
        <div onClick={() => setStep((prev) => prev + 1)}>
          <Image
            src="/assets/images/ArrowRight.svg"
            alt="arrowRight"
            width={25}
            height={25}
          />
        </div>
      </div>
    </section>
  )
}
