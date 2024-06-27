import { bookmarkDataType } from "@/types/bookmarkDataType";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import Link from "next/link";

export default function BookMarkBox( props : bookmarkDataType) {

  const { stockName, stockCode, price, prdy_ctrt } = props;

  return (

    <Link href={`/stock/${stockCode}`}>
      <div className="w-5/6 bg-slate-200 mx-auto mt-5 h-20 rounded-md flex items-center shadow-md">
        <div className="px-10 w-full">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl">{stockName}</p>
              <p className="text-xs text-center text-slate-400">{stockCode}</p>
            </div>
            <div>
              <p className={`flex items-center text-xl ${Number(prdy_ctrt) > 0 ? "text-red-400" : "text-blue-400"}`}>{Number(prdy_ctrt) > 0 ? <ArrowUpIcon size={15} /> : <ArrowDownIcon size={15} />}{prdy_ctrt} %</p>
              <p className="text-sm text-center">{formatNumberWithCommas(price)}원</p>
            </div>
          </div>
        </div>
      </div>
    </Link>

  )
}