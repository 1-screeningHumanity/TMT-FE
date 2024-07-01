import AssetListOfProfile from "./AssetListOfProfile";
import ChartOfProfile from "./ChartOfProfile";

export default function ContentsOfProfile({isSubscribe, nick} :{isSubscribe: boolean, nick: string}){


  return (
      <div className={`w-full h-full relative ${isSubscribe || "backdrop"}`} >
        <ChartOfProfile nick={nick}/>
        <AssetListOfProfile nick={nick}/>
      </div>
  )
}