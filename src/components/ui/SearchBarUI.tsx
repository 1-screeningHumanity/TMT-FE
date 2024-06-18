import Image from 'next/image'
import Link from 'next/link'
export default function SearchBarUI() {
  return (
    <Link href={'/search'}>
      <div className="flex">
        <div className="m-3 w-full h-16 rounded-2xl border-black border-4 font-bold text-xl flex justify-between">
          <Image
            src="/assets/images/search.svg"
            alt="search--v1"
            className="m-1"
            width={30}
            height={30}
          />

          <Image
            src="/assets/images/microphone.svg"
            alt="microphone--v1"
            className="m-1"
            width={35}
            height={35}
          />
        </div>
      </div>
    </Link>
  )
}
