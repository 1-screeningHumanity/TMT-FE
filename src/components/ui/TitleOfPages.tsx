export default async function TitleOfPages({title} : {title : string}) {

  return (
    <>
    <div className="flex justify-center gap-2 items-center">
      <h1 className='text-center text-xl text-[#7d12ff] font-extrabold tracking-tighter'>{title}</h1>
    </div>
    </>
  )
}