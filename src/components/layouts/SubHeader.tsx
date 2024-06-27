'use client'

import { useRouter } from "next/navigation";
import Logo from "./Logo";
import CloseIcon from "../ui/icons/CloseIcon";

function SubHeader(){

  const router = useRouter();

  return (
    <nav className="w-full fixed top-0 z-50">
      <ul 
        className="p-6 flex justify-between items-center bg-slate-100"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <li onClick={() => router.push("/")}><Logo /></li>
        <li onClick={() => router.back()}><CloseIcon /></li>
      </ul>
    </nav>
  )
}

export default SubHeader;