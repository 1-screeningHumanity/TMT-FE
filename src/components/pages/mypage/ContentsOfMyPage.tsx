import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { settingContents, stockContents } from "@/lib/mypage";

export default function ContentsOfMyPage(){

  return (
    <div className="w-80 mx-auto mt-14">
      <Tabs defaultValue="주식">
        <TabsList className="w-full">
          <TabsTrigger value="주식" className="w-1/2 border-[1px] border-b-0">주식</TabsTrigger>
          <TabsTrigger value="설정" className="w-1/2 border-[1px] border-b-0">설정</TabsTrigger>
        </TabsList>
        <TabsContent value="주식" className="mt-4">
          {stockContents.map((content) => (
            <Link key={content.id} href={content.path} className="border-[1px] w-80 h-11 text-center flex justify-center items-center text-slate-950 bg-slate-50 shadow-md mb-[1px] rounded-sm">{content.name}</Link>
          ))}
        </TabsContent>
        <TabsContent value="설정" className="mt-4">
          {settingContents.map((content) => (
            <Link key={content.id} href={content.path} className="border-[1px] w-80 h-11 text-center flex justify-center items-center text-slate-950 bg-slate-50 shadow-md mb-[1px] rounded-sm">{content.name}</Link>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}