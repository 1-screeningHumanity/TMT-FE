interface StockPrice {
  price: number
  prdy_vrss: string // 전일 대비
  prdy_vrss_sign: string // 전일 대비 등락률 부호
  prdy_ctrt: string //전일 대비율
}

export type { StockPrice }
