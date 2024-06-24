'use client'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

function MyWallet({ data, delay }: { data?: any | null, delay: number }) {

    const [show, setShow] = useState(false)
    
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), delay);
        return () => clearTimeout(timer);
      }, [delay]);
    
    if (!show) return null;
    return (
        <motion.div initial={{ opacity: 0, translateY: '-10px' }} animate={{ opacity: 1, translateY: '0px' }} transition={{ duration: 0.3 }} >
            <div className='w-full bg-gradient-to-br from-[#42C0F8] to-[#B081F4] text-white rounded-lg px-[1rem] py-[2rem] drop-shadow-sm'>
                <p className='text-md'>현재보유 총자산</p>
                <p className='text-[2.5rem] tracking-tighter font-extrabold leading-tight'><CountUp start={0} end={5350700} duration={2.5} separator=',' /></p>
                <div className='flex justify-between items-center mt-3'>
                    <div className='flex items-center'>
                        <p className='text-xs'>총평가금액</p>
                        <p className='text-xs ml-2'>5,350,700</p>
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

export default MyWallet
