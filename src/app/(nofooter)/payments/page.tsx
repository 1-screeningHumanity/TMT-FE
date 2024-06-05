import postKakaopayReady from "@/actions/payments/postKakaopayReady"

export default function payments(){
  return(

    // postKakaopayReady(itemName, quantity, totalAmount);

    <>
    <header className="text-center py-4 border-b-[1px]">결제하기</header>
      <form className="flex flex-col w-full justify-center items-center mt-40 mb-20">
        <input type="text" placeholder="상품명" id="itemName" className="w-60 h-10 text-start px-5 border-[1px]"/>
        <input type="number" placeholder="수량" id="quantity" className="w-60 h-10 text-start px-5 border-[1px]"/>
        <input type="number" placeholder="총액" id="totalAmount" className="w-60 h-10 text-start px-5 border-[1px]"/>
      </form>
      <button className="w-32 h-10 border-[1px]">1000원</button>
      <button className="w-32 h-10 border-[1px]">5000원</button>
      <button className="w-32 h-10 border-[1px]">10000원</button>
      <button className="bg-yellow-400 w-full h-14 absolute bottom-0 right-0 left-0">결제하기</button>
    </>
  )
}