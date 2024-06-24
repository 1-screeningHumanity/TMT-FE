'use client'
import { searchNameAPI } from '@/actions/search'
import SubHeader from '@/components/layouts/SubHeader'
import SearchInput from '@/components/ui/SearchInput'
import { SearchDataType } from '@/types/Search'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function page() {

  const [text, setText] = useState('');
  const [searchData, setSearchData] = useState<SearchDataType[]>([]);
  const [selectValue, setSelectValue] = useState('stocks');
  const router = useRouter();

  useEffect(() => {
    const fetchData = async (query: string) => {
      const res = await searchNameAPI(query, selectValue);
      setSearchData(res.data);
    };
    if (text.length > 0) fetchData(text);
  }, [text, selectValue]);

  return (
    <section className='fixed w-full h-[100vh] overflow-y-scroll bg-white z-[1030]'>
      <SubHeader />
      <div className='w-full h-auto bg-white animate-down fixed top-[70px] z-[1001] transition-all'>
        <SearchInput text={text} setText={setText} selectValue={selectValue} setSelectValue={setSelectValue} />
      </div>
      <div className='w-full bg-white animate-down pt-[120px] pb-[2rem] mt-[20px] rounded-b-lg transition-all'>
        {searchData && searchData.length > 0 ? (
          <ul className='w-full px-[1.8rem] mt-[2rem]'>
            {searchData.map((data) => (
              <li
                className="w-full text-lg py-[1rem] border-b-2 border-gray-100 hover:bg-gray-100 cursor-pointer"
                key={data.id}
                onClick={() => router.push(`/stock/${data.id}`)}
              >
                {data.name}
              </li>
            ))}
          </ul>
        ) : (
          <div className='w-full flex justify-start items-center mt-[2rem] px-[2rem]'>
            <p className='text-sm text-slate-500'>
              {searchData ? '검색 결과가 없습니다.' : '검색어를 입력해주세요.'}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
