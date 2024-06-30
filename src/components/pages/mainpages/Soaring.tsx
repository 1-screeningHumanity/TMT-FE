import { StockSortType } from '@/types/StcokSortType'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import formatNumberWithCommas from '@/utils/formatNumberWithCommas'
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

export default function Soaring({
  data,
  color,
}: {
  data: StockSortType[] | undefined
  color: string
}) {
  const SoaringData = data
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>순위</TableHead>
          <TableHead>종목명</TableHead>
          <TableHead>현재가</TableHead>
          <TableHead>전일비</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {SoaringData && SoaringData.map((data, index) => (
          <TableRow key={data.id}>
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell className="break-words">{data.hts_kor_isnm}</TableCell>
            <TableCell className="text-right">{formatNumberWithCommas(data.stck_prpr)}</TableCell>
            <TableCell className={`flex items-center justify-end ${color === 'RED' ? 'text-red-600' : 'text-blue-600'}`}>
              {color === "RED" ? <ArrowUpIcon size={10}/> : <ArrowDownIcon size={10} />}{data.prdy_ctrt}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
