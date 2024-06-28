import { ChatMessageDataType } from '@/types/chatMessageDataType'
import { beforeMinute } from '@/utils/formattinfTime'

export default function FromChat({ msg }: { msg: ChatMessageDataType }) {
  return (
    <div key={msg.id} className="speech-bubble">
      <div className="font-semibold">{msg.nickName}</div>
      <div>{msg.message}</div>
      <div className="relative p-2">
        <span className="text-xs absolute right-0 bottom-0 pb-1 mr-2">
          {beforeMinute(msg.createAt)}
        </span>
      </div>
    </div>
  )
}
