import { PaymentsLogBoxProps } from "@/types/PaymentsLogBoxProps";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import { parseDateTime } from "@/utils/parseDate";

export default function PaymentsLogBox({createdAt, payName, totalAmount}: PaymentsLogBoxProps){

  const parsed = parseDateTime(createdAt);
  
  return (
    <div className="w-full border-y-[0.5px] mx-auto h-24 rounded-md flex items-center tracking-tight">
      <div>
        <span className="font-bold mx-5 text-lg font-[Pretendard-Regular]">{parsed.datePart}</span>
      </div>
      <div className="w-3/5 ">
        <p className="font-bold">캐시 충전</p>
        <div>
          <span className="text-xs text-[#775da6]">{parsed.timePart} |</span> 
          <span className="text-xs text-[#775da6]">{ `${payName}` == `KakaoPay` ? " 카카오 페이" : " 카드 결제"}</span>
        </div>
      </div>
      <div className="mx-7 text-[#7d12ff] font-bold">
        ￦{formatNumberWithCommas(totalAmount)}
      </div>
    </div>
  )
}