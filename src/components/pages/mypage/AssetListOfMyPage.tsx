import { myPortfolio } from "@/actions/myPage";
import { portfolioType } from "@/types/portfolioType";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import Link from "next/link";

export default async function AssetListOfMyPage() {

  const res = await myPortfolio()
  const portfolio = res?.data;
  console.log("res", res.data);

  return (
    <div className="w-11/12 mx-auto my-4">
      <div className="flex justify-between h-8 border-b-2">
        <h3>보유중인 주식</h3>
        <Link href="/mypage/trade/tradelists" className="text-blue-700 text-sm">{`거래 내역 보기 >`}</Link>
      </div>
      <div>
        <ul className="flex justify-between text-md h-10 text-center border-b-2 items-center font-medium">
          <li className="w-2/6">종목명</li>
          <li className="w-1/6">수량</li>
          <li className="w-1/6">현재가</li>
          <li className="w-2/6">총액</li>
        </ul>
      </div>
      { !portfolio ? <h3 className="text-center mt-10">현재 보유중인 주식이 없습니다.</h3> :
      portfolio.map((portfolio : portfolioType) =>  {
        return (
        <ul className="flex justify-between text-md h-12 text-center border-b-2 items-center">
            <li className="w-2/6">{portfolio.stockName}</li>
            <li className="w-1/6">{portfolio.totalAmount}</li>
            <li className="w-1/6">{formatNumberWithCommas(portfolio.stockPrice)}</li>
            <li className="w-2/6">{formatNumberWithCommas((portfolio.stockPrice as number) * (portfolio.totalAmount as number))}</li>
        </ul>
        )}
      )}
    </div>
  )
}