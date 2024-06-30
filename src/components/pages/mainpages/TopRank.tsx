'use client'

import { sortAPI } from '@/actions/stock/mainpage'
import Soaring from '@/components/pages/mainpages/Soaring'
import { StockSortType } from '@/types/StcokSortType'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export default async function TopRank({data, delay}: { data: any[], delay: number} ) {
  // const soaringData = await sortAPI('soaring-stocks')
  // const plummetingData = await sortAPI('plummeting-stocks')
  const [top3soaring, setTop3soaring] = useState<StockSortType[]>();
  const [top3plummeting, setTop3plummeting] = useState<StockSortType[]>();
  // const top3plummeting: StockSortType[] = plummetingData.slice(0, 3)
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay])

  useEffect(() => {
    if(data){
      setTop3soaring(data[0].slice(0,3))
      setTop3plummeting(data[1].slice(0,3))
    }
  }, [data])

  if (!show) return null;
  return (
    <motion.div initial={{ opacity :0, translateY: "-10px"}} animate={{ opacity:1, translateY : "0px"}} transition={{ duration : 0.3}} className='py-4 drop-shadow-sm'>
      <Tabs defaultValue="uprank" className="w-full">
      <TabsList className="grid w-full grid-cols-2 gap-2 mb-[1rem]">
        <TabsTrigger value="uprank" 
          className={cn(
            "py-2",
            "data-[state=active]:bg-white data-[state=active]:text-red-600 border data-[state=active]:border-[0px] data-[state=active]:border-red-600 data-[state=active]:text-lg",
            "bg-red-300 text-white border-[1px] border-red-300",
          )}>오늘의 급등주</TabsTrigger>
        <TabsTrigger value="downrank"
          className={cn(
            "py-2",
            "data-[state=active]:bg-white data-[state=active]:text-blue-600 border data-[state=active]:border-[0px] data-[state=active]:border-blue-600 data-[state=active]:text-lg",
            "bg-blue-300 text-white border-[1px] border-blue-300",
          )}>오늘의 급락주</TabsTrigger>
      </TabsList>
      <TabsContent value="uprank">
        <Card>
          <CardContent className="space-y-2">
            <Soaring data={top3soaring} color={'RED'} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="downrank">
        <Card>
          <CardContent className="space-y-2">
            <Soaring data={top3plummeting} color={'BLUE'} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
    </motion.div>
  )
}
