import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DailyRank from "./DailyRank";
import WeeklyRank from "./WeeklyRank";
import MonthlyRank from "./MonthlyRank";

export default function ContentsOfUserRank() {
  return (
    <Tabs defaultValue="일간">
    <TabsList className="w-full">
      <TabsTrigger value="일간" className="w-1/2">일간</TabsTrigger>
      <TabsTrigger value="주간" className="w-1/2">주간</TabsTrigger>
      <TabsTrigger value="월간" className="w-1/2">월간</TabsTrigger>
    </TabsList>
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