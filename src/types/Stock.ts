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
  stockCreatAt: string
  prdy_vrss: string
  prdy_vrss_sign: string
  prdy_ctrt: string

  stck_prdy_clpr: string
  acml_vol: string
  acml_tr_pbmn: string
  hts_kor_isnm: string
  stck_prpr: string
}
// {
//   stockCode: '005930',
//   stockCreatAt: '20240614150300',
//   prdy_vrss: '1300',
//   prdy_vrss_sign: '2',
//   prdy_ctrt: '1.65',
//   stck_prdy_clpr: '78600',
//   acml_vol: '20134802',
//   acml_tr_pbmn: '1607684461000',
//   hts_kor_isnm: '삼성전자',
//   stck_prpr: '79900'
// }
interface bookmarkDataType {
  stockCode: string
  stockName: string
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
  bookmarkDataType,
}
