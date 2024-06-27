'use client'

import { deleteMember } from "@/actions/member";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
export default function ButtonOfResign(){

  const router = useRouter();
  const handleResign = async () => {
    await deleteMember();
    router.push("/");
    await signOut();
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="bg-[#d9d9d9] text-white text-sm font-semibold rounded-lg w-80 h-10 mx-auto block my-6 hover:bg-[#9c9b9b]">회원탈퇴</button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-5/6">
        <AlertDialogHeader>
          <AlertDialogTitle>정말로 탈퇴하시겠습니까 ?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row gap-4 items-center justify-center">
          <AlertDialogAction className="w-20" onClick={() => handleResign()}>네</AlertDialogAction>
          <AlertDialogCancel className="w-20 mt-0" >아니오</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
