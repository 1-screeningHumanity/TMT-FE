export default function RankHeader({columns} : {columns: string[]}){
  return(
    <div className="flex justify-around border-b-[1px] border-[#c6c6c7] mt-10 text-lg">
      <span className="w-1/4 text-center">{columns[0]}</span>
      <span className="w-1/4 text-center">{columns[1]}</span>
      <span className="w-1/2 text-center">{columns[2]}</span>
      <span className="w-1/2 text-center">{columns[3]}</span>
    </div>
  )
}