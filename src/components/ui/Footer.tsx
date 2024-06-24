import Link from 'next/link'
import { footer } from '@/lib/footer'
import {
  Navi01,
  Navi02,
  Navi03,
  Navi04,
  Navi05,
} from '@/components/ui/icons'

export default function Footer() {
  
  return (
    <footer className="fixed bottom-0 w-full bg-white z-10 p-[1rem]">
      <ul className='flex justify-between items-center'>
      {footer.map((data) => (
        <li key={data.id}>
          <Link
            href={data.href}
            className="text-xs flex items-center flex-col justify-center gap-2 w-16"
           
          >
            {data.id === 1 && <Navi01 />}
            {data.id === 2 && <Navi02 />}
            {data.id === 3 && <Navi03 />}
            {data.id === 4 && <Navi04 />}
            {data.id === 5 && <Navi05 />}
            {data.name}
          </Link>
        </li>
      ))}
      </ul>
    </footer>
  )
}
