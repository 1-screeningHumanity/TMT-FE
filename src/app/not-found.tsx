import ButtonOfNotFound from "@/components/ui/buttons/ButtonOfNotFound";
import Image from "next/image";

export default function NotFound() {
  return (
    <div>
      <Image src={"/assets/images/error.svg"} width={100} height={100} alt={"logo"} className="mx-auto pt-40"/>
      <h1 className="text-[#7d12ff] text-center mt-10 text-xl">존재하지 않는 페이지입니다.</h1>
      <ButtonOfNotFound />
      <Image src={"/assets/images/line.svg"} alt="line" width={500} height={0} />
    </div>
  )
}