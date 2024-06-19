import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { settingContents, stockContents } from "@/lib/mypage";

export default function ContentsOfMyPage(){

  return (
    <div className="w-80 mx-auto mt-10">
      <Tabs defaultValue="주식">
        <TabsList className="w-full">
          <TabsTrigger value="주식" className="w-1/2">주식</TabsTrigger>
          <TabsTrigger value="설정" className="w-1/2">설정</TabsTrigger>
        </TabsList>
        <TabsContent value="주식">
          {stockContents.map((content) => (
            <Link key={content.id} href={content.path} className="border-[1px] w-80 h-12 block text-center leading-10">{content.name}</Link>
          ))}
        </TabsContent>
        <TabsContent value="설정">
          {settingContents.map((content) => (
            <Link key={content.id} href={content.path} className="border-[1px] w-80 h-12 block text-center leading-10">{content.name}</Link>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}