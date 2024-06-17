import Image from 'next/image'
import Link from 'next/link'
export default function SearchBarUI() {
  return (
    <Link href={'/search'}>
      <div className="flex">
        <div className="m-3 w-full h-16 rounded-2xl border-black border-4 font-bold text-xl flex justify-between">
          <Image
            src="https://img.icons8.com/ios/50/search--v1.png"
            alt="search--v1"
            className="p-"
            width={48}
            height={40}
          />

          <Image
            src="https://img.icons8.com/material-sharp/48/microphone--v1.png"
            alt="microphone--v1"
            width={48}
            height={48}
          />
        </div>
      </div>
    </Link>
  )
}
