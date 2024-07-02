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
  useEffect(() => {
    if (step > 10 || step < 1) {
      const newOpen = !isOpen
      setIsOpen(!isOpen)
      localStorage.setItem('guide', newOpen ? 'true' : 'false')
    }
  })

  useEffect(() => {
    const mainElement = document.querySelector('body')
    if (isOpen) {
      if (step == 4) {
        const ref = document.querySelector('.selected-Tap')
        ref?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      if (step == 6) {
        const ref = document.querySelector('.stockNews')
        ref?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      if (step == 10) {
        const ref = document.querySelector('.GuideIcon')
        ref?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      mainElement?.classList.add('overflow-hidden')
    } else {
      mainElement?.classList.remove('overflow-hidden')
    }
    return () => {
      mainElement?.classList.remove('overflow-hidden')
    }
  }, [isOpen, step])

  const styleClipPath = (styleCode: number) => {
    if (styleCode === 1) {
      return 'polygon(0% 0%, 0% 100%, 3% 100%, 3% 9%, 40% 9%, 40% 30%, 0 30%, 3% 100%, 100% 100%, 100% 0%)'
    } else if (styleCode === 2) {
      return 'polygon(0% 0%, 0% 100%, 70% 100%, 70% 9%, 99% 9%, 99% 30%, 0 30%, 3% 100%, 100% 100%, 100% 0%)'
    }
    if (styleCode === 3) {
      return 'polygon(0% 0%, 0% 100%, 3% 100%, 3% 20%, 50% 20%, 50% 50%, 0 50%, 3% 100%, 100% 100%, 100% 0%)'
    }
    if (styleCode === 4) {
      return 'polygon(0% 0%, 0% 100%, 3% 100%, 3% 40%, 97% 40%, 97% 60%, 0 60%, 3% 100%, 100% 100%, 100% 0%)'
    }
    if (styleCode === 5) {
      return 'polygon(0% 0%, 0% 100%, 3% 100%, 3% 85%, 97% 85%, 97% 100%, 0 100%, 3% 100%, 100% 100%, 100% 0%)'
    }
    if (styleCode === 6) {
      return 'polygon(0% 0%, 0% 100%, 3% 100%, 3% 40%, 97% 40%, 97% 60%, 0 60%, 3% 100%, 100% 100%, 100% 0%)'
    }
    if (styleCode === 7 || styleCode === 8 || styleCode === 9) {
      return 'polygon(0% 0%, 0% 100%, 3% 100%, 3% 15%, 97% 15%, 97% 40%, 0 40%, 3% 100%, 100% 100%, 100% 0%)'
    }
  }

  return (
    <section
      className="fixed top-0 right-0 bottom-0 left-0 z-[1000] bg-black/50"
      style={{
        // clipPath: styleClipPath(step),
        clipPath: styleClipPath(step),
      }}
    >
      <div
        className="right-0 top-0 absolute m-5 overflow-y-hidden"
        onClick={() => {
          setIsOpen(false), localStorage.setItem('guide', 'false')
        }}
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

      <div className="flex absolute left-0 top-0 m-5 bg-white">
        <div onClick={() => setStep((prev) => prev - 1)}>
          <Image
            src="/assets/images/ArrowLeft.svg"
            alt="arrowLeft"
            width={25}
            height={25}
          />
        </div>
        <span className="mx-2">{step} / 10</span>
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
