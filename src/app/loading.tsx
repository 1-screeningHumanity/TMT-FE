import Image from "next/image";

export default function loading() {
  return(
    <>
      <div className="mx-auto w-fit text-center mt-40 mb-40">
        <Image src={"/assets/images/logo.svg"} alt="logo" width={100} height={100}></Image>
      </div>
        <Image src={"/assets/images/line.svg"} alt="line" width={500} height={0}></Image>
      <p className="text-xs text-center mt-10 text-[#8e9195]">
        ©2024 TMINVESTMENT.com<br/>
        ALL RIGHTS RESERVED.
      </p>
  </>
  )
}