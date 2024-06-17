interface kakaoPayReady{
  itemName : string | null
  quantity : number | null
  totalAmount : number | null
}

interface kakaoPayApprove{
  tid : string | null
  partner_order_id : number | null
  pgToken : number | null
}

export type { kakaoPayReady, kakaoPayApprove }