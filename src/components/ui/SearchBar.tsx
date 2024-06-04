'use client'
import 'regenerator-runtime/runtime'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { searchNameAPI } from '@/actions/search'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import { SearchDataType } from '@/types/Search'
import Link from 'next/link'

export default function SearchBar() {
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition()
  const [text, setText] = useState('')
  const [searchData, setSearchData] = useState<SearchDataType[]>([])
  const [selectValue, setSelectValue] = useState('')
  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening()
    } else {
      SpeechRecognition.startListening({ language: 'ko-KR' })
    }
  }
  if (!browserSupportsSpeechRecognition) {
    console.log('Browser does not support speech recognition.')
  }

  const handleSearch = (event: React.SetStateAction<string>) => {
    setText(event)
  }
  useEffect(() => {
    const fetchData = async () => {
      const res = await searchNameAPI(text, selectValue)
      console.log(res.data)
      setSearchData(res.data)
    }
    fetchData()
  }, [text])
  return (
    <>
      <div className="flex">
        <select
          className="border-2 w-24 h-14 my-4 ml-4 text-center font-bold text-xl"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="stocks">주식</option>
          <option value="members">회원</option>
        </select>
        <div
          className="m-3 w-full h-16 rounded-2xl border-black border-4 font-bold text-xl flex justify-between"
          onChange={() => {}}
        >
          {transcript}{' '}
          <Image
            src="https://img.icons8.com/ios/50/search--v1.png"
            alt="search--v1"
            className="p-"
            width={48}
            height={40}
          />
          <input
            className="w-full focus:outline-none "
            // onChange={(e) => setText(e.target.value)}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button onClick={toggleListening}>
            <Image
              src="https://img.icons8.com/material-sharp/48/microphone--v1.png"
              alt="microphone--v1"
              width={48}
              height={48}
            />
          </button>
        </div>
      </div>
      <div>
        {searchData != null &&
          searchData.map((data) => (
            <Link href={`/stock/${data.stockCode}`}>
              <div
                key={data.stockCode}
                className="w-full h-20 text-2xl font-bold pl-10 flex items-center border"
              >
                {data.name}
              </div>
            </Link>
          ))}
      </div>
    </>
  )
}

// 검색이 하나라도 없으면 무조건 bad request가 뜨는데 이걸 해결해야함
// 검색어가 무조건 10개만 출력되는지
// Lg 전자가 검색이 안된다

// 멤버 검색시 닉네임만 검색? 이름 검색?
