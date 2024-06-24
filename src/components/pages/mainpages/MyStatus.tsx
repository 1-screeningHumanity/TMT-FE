'use client'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

function MyStatus({ data, delay }: { data?: any | null, delay: number }) {

    const [show, setShow] = useState(false)
    
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), delay);
        return () => clearTimeout(timer);
      }, [delay]);
    
    if (!show) return null;
    
    return (
        <motion.div initial={{ opacity: 0, translateY: '-10px' }} animate={{ opacity: 1, translateY: '0px' }} transition={{ duration: 0.3 }}>
            <div className='w-full bg-white rounded-lg px-[1rem] py-[1rem] drop-shadow-sm'>
                <p className='text-sm mb-2'>김투자님 어서오세요.</p>
                <p className='text-2xl font-extrabold leading-tight'>종합순위<br/><CountUp start={0} end={261} duration={1} separator=',' />위입니다.</p>
            </div>
        </motion.div>
    )
}

export default MyStatus
