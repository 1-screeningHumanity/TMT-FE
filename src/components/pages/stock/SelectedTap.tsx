'use client'
import Link from 'next/link'
import Router, { usePathname, useRouter } from 'next/navigation'
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
    {
      id: 4,
      name: '종목 토론방',
      link: `/stock/${params.StockCode}/chat`,
    },
  ]

  const pathrouter = usePathname()
  const router = useRouter()
  return (
    <div className="mx-3">
      <div className="flex justify-between items-center h-8 ">
        {LinkedData.map((data) => (
          // <a href={`${data.link}`}>
          <button
            key={data.id}
            onClick={() => router.push(data.link) as unknown as void}
            className="w-1/3 flex items-center justify-center border rounded-t-lg"
            style={{
              backgroundColor: pathrouter === data.link ? '#FFFFFF' : '#D7D7D7',
              color: pathrouter === data.link ? '#000000' : '#FFFFFF',
              height: pathrouter === data.link ? '50px' : '40px',
              borderColor: 'black',
              transform: pathrouter === data.link ? 'translateY(-5px)' : 'none',
            }}
          >
            {data.name}
          </button>
          // </a>
        ))}
      </div>
    </div>
  )
}
