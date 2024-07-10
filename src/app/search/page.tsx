'use client'

import { searchNameAPI } from '@/actions/search';
import SubHeader from '@/components/layouts/SubHeader';
import SearchInput from '@/components/ui/SearchInput';
import { SearchDataType } from '@/types/Search';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'

export default function page() {

  const [text, setText] = useState<string>('');
  const [searchData, setSearchData] = useState<SearchDataType[]>([]);
  const [selectValue, setSelectValue] = useState('stocks');
  const router = useRouter();

  useEffect(() => {
    const fetchData = async (query: string) => {
      const res = await searchNameAPI(query, selectValue)
      setSearchData(res.data);
    }
    if(text.length > 0) fetchData(text);
  }, [text, selectValue]);

  function handleClick(data: SearchDataType){
    if(selectValue === 'stocks'){
      router.push(`/stock/${data.id}`)
    }
    if(selectValue === 'members'){
      router.push(`/profile/${encodeURIComponent(data.name)}`)
    }
  }

  return (
    <section className='fixed z-[1030] w-full h-[100vh] overflow-y-scroll'>
      <SubHeader />
      <div className='animate-down transition-all fixed top-[70px] w-full h-auto z-[1001]'>
        <SearchInput text={text} setText={setText} selectValue={selectValue} setSelectValue={setSelectValue} />
      </div>
      <div className='animate-down relative top-[100px] mx-8 transition-all'>
        {searchData.length > 0 ? (
          <ul>
            {searchData.map((data) => (
              <li 
                className='text-lg py-4 border-b-2 border-black-100 hover:bg-black-100 cursor-pointer'
                key={data.id}
                onClick={() => handleClick(data)}
                >
                {data.name}
              </li>
            ))}
          </ul>
        ) : (
          <p >
            {searchData ? "검색 결과가 없습니다." : "검색어를 입력해주세요."}
          </p>
        
        )}
      </div>
    </section>
  )
}

