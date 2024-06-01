import 'regenerator-runtime/runtime'
import SearchBar from '@/components/ui/SearchBar'
import ButtonOfSignout from '@/components/ui/buttons/ButtonOfSignout'

export default function Home() {
  return (
    <div>
      <SearchBar />
      <h1 className='text-xl'>메인페이지입니다.</h1>
      <ButtonOfSignout />
    </div>
  )
}
