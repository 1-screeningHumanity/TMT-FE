import Logo from "@/components/layouts/Logo";
import LineLoader from "@/components/ui/LineLoader";

export default function loading() {
  return(
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <Logo />
      <LineLoader />
    </div>
  )
}