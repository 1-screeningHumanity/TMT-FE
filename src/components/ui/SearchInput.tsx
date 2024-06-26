'use client'

import Image from "next/image"
import { useEffect } from "react"
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"

export default function SearchInput({text, setText, selectValue, setSelectValue} :
  {
    text : string,
    setText : (text : string) => void,
    selectValue : string,
    setSelectValue : (selectValue : string) => void
  }
){
  const { transcript, listening } = useSpeechRecognition()
  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ language: 'ko-KR' });
    };
  }

  useEffect(() => {
    if(transcript){
      setText(transcript)
    }
  }, [transcript])

  return(
    <section className="flex justify-between items-center px-6 py-4 gap-2">
      <select
        className="border-2 text-center text-xl rounded-lg p-4 focus:outline-none"
        value={selectValue}
        onChange={(e) => {
          e.preventDefault()
          setSelectValue(e.target.value)
        }}
      >
        <option value="stocks">주식</option>
        <option value="members">회원</option>
      </select>
      <div className="w-full rounded-lg border-2 text-xl p-4 flex justify-between bg-white">
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
            alt="microphone"
            className="m-1"
            width={20}
            height={14}
          />
        </button>
      </div>
    </section>
  )

}