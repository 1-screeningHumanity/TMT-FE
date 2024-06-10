'use client'
import Link from 'next/link'
import Router, { usePathname } from 'next/navigation'
export default function SelectedTap({
  params,
}: {
  params: { StockCode: string }
}) {
  const LinkedData = [
    {
      id: 1,
      name: '차트',
      link: `/stock/${params.StockCode}`,
    },
    {
      id: 2,
      name: '호가',
      link: `/stock/${params.StockCode}/ask_price`,
    },
    {
      id: 3,
      name: '투자자',
      link: `/stock/${params.StockCode}/investor`,
    },
  ]

  const router = usePathname()

  return (
    <div className="mx-3">
      <div className="flex justify-between items-center h-8 ">
        {LinkedData.map((data) => (
          <Link
            key={data.id}
            href={data.link}
            className="w-1/3 flex items-center justify-center border rounded-t-lg"
            style={{
              backgroundColor: router === data.link ? '#FFFFFF' : '#D7D7D7',
              color: router === data.link ? '#000000' : '#FFFFFF',
              height: router === data.link ? '50px' : '40px',
              borderColor: 'black',
              transform: router === data.link ? 'translateY(-5px)' : 'none',
            }}
          >
            {data.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
