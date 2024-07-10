import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DailyRank from "./DailyRank";
import WeeklyRank from "./WeeklyRank";
import MonthlyRank from "./MonthlyRank";
import AssetRank from "./AssetRank";

export default function ContentsOfUserRank() {
  return (
    <Tabs defaultValue="자산" className="mt-10">
      <TabsList className="w-full">
        <TabsTrigger value="자산" className="w-1/2 border-[1px] border-b-0">자산</TabsTrigger>
        <TabsTrigger value="일간" className="w-1/2 border-[1px] border-b-0">일간</TabsTrigger>
        <TabsTrigger value="주간" className="w-1/2 border-[1px] border-b-0">주간</TabsTrigger>
        <TabsTrigger value="월간" className="w-1/2 border-[1px] border-b-0">월간</TabsTrigger>
      </TabsList>
      <TabsContent value="자산">
        <AssetRank />
      </TabsContent>
      <TabsContent value="일간">
        <DailyRank />
      </TabsContent>
      <TabsContent value="주간">
        <WeeklyRank />
      </TabsContent>
      <TabsContent value="월간">
        <MonthlyRank />
      </TabsContent>
    </Tabs>
  )
}