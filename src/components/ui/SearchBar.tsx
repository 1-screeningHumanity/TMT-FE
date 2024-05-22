'use client'
import 'regenerator-runtime/runtime'
import React from 'react'
import Image from 'next/image'

import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

const useSpeechToText = () => {
  const { transcript, listening } = useSpeechRecognition()

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening()
    } else {
      SpeechRecognition.startListening({ language: 'ko-KR', continuous: true })
    }
  }

  return { transcript, listening, toggleListening }
}

export default function SearchBar() {
  const { transcript, listening, toggleListening } = useSpeechToText()

  return (
    // <div>
    //   <h1>Web Speech API</h1>
    //   <textarea className="transcript" value={transcript} onChange={() => {}} />
    //   <button onClick={toggleListening}>
    //     {listening ? '음성인식 중지' : '음성인식 시작'}
    //   </button>
    // </div>
    <div>
      <div
        className="m-3 p-3 w-full h-16 rounded-2xl bg-slate-300 font-bold text-xl flex justify-between"
        onChange={() => {}}
      >
        검색어를 입력해주세요
        <button onClick={toggleListening}>
          <Image
            src="https://img.icons8.com/ios/50/search--v1.png"
            alt="search--v1"
            width={48}
            height={48}
          />
        </button>
      </div>
    </div>
  )
}
