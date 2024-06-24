'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Modal } from './modal';
import SubHeader from '@/components/layouts/SubHeader';
import SearchInput from '@/components/ui/SearchInput';
import { searchNameAPI } from '@/actions/search';
import { SearchDataType } from '@/types/Search';

type DialogElementWithMethods = HTMLDialogElement & {
  showModal: () => void;
  close: () => void;
};

export default function Page() {
  const [text, setText] = useState('');
  const [searchData, setSearchData] = useState<SearchDataType[]>([]);
  const [path, setPath] = useState('');
  const [selectValue, setSelectValue] = useState('stocks');
  const router = useRouter();
  const dialogRef = useRef<DialogElementWithMethods>(null);

  useEffect(() => {
    const fetchData = async (query: string) => {
      const res = await searchNameAPI(query, selectValue);
      setSearchData(res.data);
    };
    if (text.length > 0) fetchData(text);
  }, [text, selectValue]);

  const handleLinkClick = async (id: string) => {
    if (dialogRef.current) {
      console.log(dialogRef.current);
      setPath(`/stock/${id}`);
      dialogRef.current.close();
    }
  };

  useEffect(() => {
    if (dialogRef.current) {
      console.log(dialogRef.current);
      dialogRef.current.showModal();
    }
  }, []);

  return (
    <Modal ref={dialogRef} path={path}>
      <SubHeader />
      <div className='w-full h-auto bg-white animate-down fixed top-[70px] z-[1001] transition-all'>
        <SearchInput text={text} setText={setText} selectValue={selectValue} setSelectValue={setSelectValue} />
      </div>
      <div className='w-full bg-white animate-down pt-[120px] pb-[2rem] mt-[20px] rounded-b-lg transition-all'>
        {searchData && searchData.length > 0 ? (
          <ul className='w-full max-h-[40vh] px-[1.5rem] mt-[2rem] overflow-y-scroll'>
            {searchData.map((data) => (
              <li
                className="w-full text-lg py-[1rem] border-b-2 border-gray-100 hover:bg-gray-100 cursor-pointer"
                key={data.id}
                onClick={() => handleLinkClick(data.id)}
              >
                {data.name}
              </li>
            ))}
          </ul>
        ) : (
          <div className='w-full flex justify-center items-center mt-[2rem]'>
            <p className='text-sm text-slate-500'>
              {searchData ? '검색 결과가 없습니다.' : '검색어를 입력해주세요.'}
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}