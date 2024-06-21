import ChartOfProfile from "./ChartOfProfile";

export default function ContentsOfProfile({isSubscribe} :{isSubscribe: boolean}){


  return (
      <div className={`w-full h-full relative ${isSubscribe || "backdrop"}`} >
        <ChartOfProfile/>
      </div>
  )
}