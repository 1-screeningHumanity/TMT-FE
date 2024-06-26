'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { wonInfoAPI } from "@/actions/wallet";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";

function MyWallet({data, delay} : {data: any, delay: number}){

  const [show, setShow] = useState<boolean>(false)
  const [won, setWon] = useState<number>(0);

  useEffect(() => {

    async function getWon(){
      const res = await wonInfoAPI();
      console.log("res: ", res);
      setWon(res?.data?.won);
    }
    getWon();
    
    const timer = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(timer);
  },[delay])
  
  if(!show) return null;

  return(
    <motion.div initial={{ opacity: 0, translateY: '-10px' }} animate={{ opacity: 1, translateY: '0px' }} transition={{ duration: 0.3 }}>
      <div className='w-full bg-gradient-to-br from-[#42C0F8] to-[#B081F4] text-white rounded-lg px-[1rem] py-[2rem] drop-shadow-sm'>
          <p className='text-md'>현재보유 총자산</p>
          <p className='text-[2.5rem] tracking-tighter font-extrabold leading-tight'><CountUp start={0} end={won} duration={2.5} separator=',' /></p>
          <div className='flex justify-between items-center mt-3'>
              <div className='flex items-center'>
                  <p className='text-xs'>총평가금액</p>
                  <p className='text-xs ml-2'>{formatNumberWithCommas(won)}</p>
              </div>
              <div className='flex items-center'>
                  <p className='text-xs'>총수익률</p>
                  <p className='text-xs ml-2'>+1.2%</p>
              </div>
          </div>
      </div>
    </motion.div>
  )
}

export default MyWallet;