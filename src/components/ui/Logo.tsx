import React from 'react'
import Image from 'next/image'

function Logo({wSize, hSize, gutterSize}: {wSize: number, hSize: number, gutterSize: number}) {
  return (
    <div className="w-full flex justify-center items-center" style={{marginTop:`${gutterSize}px`, marginBottom:`${gutterSize}px`}}>
      <Image src={"/assets/images/logo2.svg"} alt="티끌모의태산 로고" width={wSize} height={hSize}/>
    </div>
  )
}

export default Logo