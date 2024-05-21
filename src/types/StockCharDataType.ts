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
  _class: string
}

export type { StockChartDataType }
