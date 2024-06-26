export default function SkeletonCard() {

  return(
    <div className="flex flex-col space-y-3">
      <div className="h-[125px] w-full rounded-xl bg-slate-200"/>
      <div className="space-y-2">
        <div className="h-4 w-[250px] bg-slate-200"/>
        <div className="h-4 w-[200px] bg-slate-200"/>
      </div>
    </div>
  )
}