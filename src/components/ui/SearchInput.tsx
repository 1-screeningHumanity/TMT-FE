'use client'
import 'regenerator-runtime/runtime'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'


export default function SearchInput(
    { text, setText, selectValue, setSelectValue } : 
    { 
        text: string, 
        setText: (text: string) => void,
        selectValue: string,
        setSelectValue: (selectValue: string) => void
    }
){
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition()

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening()
    } else {
      SpeechRecognition.startListening({ language: 'ko-KR' })
    }
  }

  useEffect(() => {
    if (transcript) {
      setText(transcript)
    }
  }, [transcript])

  return (
    <section className="flex justify-between items-center px-[1.5rem] py-[1rem] gap-2">
        <select
            className="border-2 text-center text-xl rounded-lg py-[1rem] px-[1rem] focus:outline-none"
            value={selectValue}
            onChange={(e) => {
                e.preventDefault()
                setSelectValue(e.target.value)}
            }
        >
            <option value="stocks">주식</option>
            <option value="members">회원</option>
        </select>
        <div className="w-full rounded-lg border-2 text-xl py-[1rem] px-[1rem] flex justify-between">
            <input
            className="w-full focus:outline-none"
            value={text}
            onChange={(e) => {
                e.preventDefault()
                setText(e.target.value)
            }}
            />
            <button onClick={toggleListening}>
            <Image
                src="/assets/images/microphone.svg"
                alt="microphone--v1"
                className="m-1"
                width={20}
                height={14}
            />
            </button>
        </div>
    </section>
  )
}
