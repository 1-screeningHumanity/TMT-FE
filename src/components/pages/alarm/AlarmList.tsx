import Image from 'next/image'
export default function AlarmList({ alarmList }: { alarmList: any }) {
  return (
    <>
      {alarmList.map((item) => (
        <div
          key={item.id}
          className=" bg-slate-200 relative  h-36  items-center p-5 border-b mx-5 my-8 rounded-2xl"
        >
          <div className="text-2xl">{item.content}</div>
          {item.isRead === '44' && (
            <span className="h-4 w-4 absolute bg-sky-600 rounded-full right-0 top-0 m-2">
              {''}
            </span>
          )}

          <div className="absolute bottom-0 mb-3">{item.time}</div>
        </div>
      ))}
    </>
  )
}
