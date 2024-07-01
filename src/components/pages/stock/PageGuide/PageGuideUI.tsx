'use client'
import Guide1 from './Guide1'
import Image from 'next/image'
import Guide2 from './Guide2'
import Guide3 from './Guide3'
import Guide4 from './Guide4'
import Guide5 from './Guide5'
import { useState } from 'react'

export default function PageGuideUI() {
  const [step, setStep] = useState(1)
  return (
    <section className="fixed top-0 right-0 bottom-0 left-0 z-[1000] bg-black/50">
      <div className="right-0 top-0 absolute m-5 ">
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
      <div className="flex absolute right-0 bottom-0 m-5 bg-white">
        <div onClick={() => setStep((prev) => prev - 1)}>
          <Image
            src="/assets/images/ArrowLeft.svg"
            alt="arrowLeft"
            width={25}
            height={25}
          />
        </div>
        <span>{step}</span>
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
