import { getStaticStockAskPrice } from '@/actions/stock/stock'
import AskPrice from '@/components/pages/stock/AskPrice'
import formatAskPrice from '@/utils/formatAskPrice'

export default async function page(props: { params: { StockCode: string } }) {
  const stockCode = props.params.StockCode
  const data = await getStaticStockAskPrice(stockCode)
  const staticAskPrice = formatAskPrice(data)
  return <AskPrice stockCode={stockCode} staticAskPrice={staticAskPrice} />
}
