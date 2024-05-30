interface AskingPriceDataTypes {
  stockCode?: String
  askp1: String
  askp2: String
  askp3: String
  askp_rsqn1: String
  askp_rsqn2: String
  askp_rsqn3: String
  bidp1: String
  bidp2: String
  bidp3: String
  bidp_rsqn1: String
  bidp_rsqn2: String
  bidp_rsqn3: String
  total_askp_rsqn: String
  total_bidp_rsqn: String
}
interface InvestorsDataType {
  stockCode: String
  stck_bsop_date: String
  prsn_ntby_qty: String
  frgn_ntby_qty: String
  orgn_ntby_qty: String
  prdy_vrss_sign: String
}
interface SocketStockDataType {
  color: string
  symbol: string
  now_price: string
  prdy_ctrt: string
  stck_oprc: string
  stck_hgpr: string
  stck_lwpr: string
  todayDate: string
}
interface StockChartDataType {
  _id: {
    $oid: string
  }
  stock_code: string
  prdy_vrss: string
  stck_bsop_date: string
  stck_clpr: string
  stck_oprc: string
  stck_hgpr: string
  stck_lwpr: string
  acml_vol: string
  acml_tr_pbmn: string
}
interface StockPrice {
  price: number
  prdy_vrss: string // 전일 대비
  prdy_vrss_sign: string // 전일 대비 등락률 부호
  prdy_ctrt: string //전일 대비율
}

export type {
  AskingPriceDataTypes,
  InvestorsDataType,
  SocketStockDataType,
  StockChartDataType,
  StockPrice,
}
