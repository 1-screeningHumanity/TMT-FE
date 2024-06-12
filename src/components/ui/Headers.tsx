import Image from 'next/image'
import Link from 'next/link'

export default function Headers({ title = '' }: { title: string }) {
  return (
    <div className="mt-3 flex items-center justify-between border-b-[1px] pb-3">
      <Image
        width="30"
        height="30"
        src="/assets/images/back.svg"
        alt="back--v1"
        className="mt-1 ml-3"
        onClick={() => history.back()}
      />
      <h1 className="relative left-6 text-lg leading-10 font-[Pretendard-Regular]">
        {title}
      </h1>
      <div className="flex items-center">
        <Image
          width="40"
          height="40"
          src="/assets/images/check.svg"
          alt="checked--v1"
          className="mr-3"
        />
        {/* <img
          width="50"
          height="50"
          src="https://img.icons8.com/material-rounded/50/checked--v1.png"
          alt="checked--v1"
        /> */}
        {/* <span onClick={handleFcm}> */}
        <Link href={'/alarm'}>
          <Image
            width="30"
            height="30"
            src="/assets/images/alarm.svg"
            alt="alarm"
            className="mr-4"
          />
        </Link>
        {/* </span> */}
      </div>
    </div>
  )
}
