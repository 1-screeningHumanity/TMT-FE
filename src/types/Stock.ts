interface AskingPriceDataTypes {
  stockCode?: String
  aspr_acpt_hour?: string
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
interface FormatAskinDataTypes {
  askp_arr: string[][]
  max_askp_rsqn: number
  bidp_arr: string[][]
  max_bidp_rsqn: number
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
  color?: string
  symbol?: string
  now_price?: string | undefined
  prdy_ctrt?: string | undefined
  stck_oprc?: string | undefined
  stck_hgpr?: string | undefined
  stck_lwpr?: string | undefined
  todayDate?: string
}
interface StockChartDataType {
  id: string
  stockCode: string
  stck_bsop_date: string
  stck_clpr: string
  stck_oprc: string
  stck_hgpr: string
  stck_lwpr: string
  acml_vol: string
  acml_tr_pbmn: string
  prdy_vrss: string
  prdy_vrss_sign: string
}
interface StockPrice {
  price: number
  prdy_vrss: string // 전일 대비
  prdy_vrss_sign: string // 전일 대비 등락률 부호
  prdy_ctrt: string //전일 대비율
}

interface TradeType {
  stockCode: String
  price: number
  amount: number
  stockName: string
}

interface staticStockType {
  stockCode: string
  stck_cntg_hour: string
  stck_prpr: string
  stck_hgpr: string
  stck_lwpr: string
  cntg_vol: string
}
export type {
  AskingPriceDataTypes,
  InvestorsDataType,
  SocketStockDataType,
  StockChartDataType,
  StockPrice,
  TradeType,
  staticStockType,
  FormatAskinDataTypes,
}
