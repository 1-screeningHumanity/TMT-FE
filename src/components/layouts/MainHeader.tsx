import Link from "next/link";
import Logo from "./Logo";
import MainNav from "./MainNav";

export default function MainHeader() {

  return(
    <header
    className='w-full p-[1.5rem] flex justify-between items-center fixed top-0 z-[20] backdrop-blur-sm'
    style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
    }}
    >
      <Logo />
      <MainNav />
    </header>
  )
}