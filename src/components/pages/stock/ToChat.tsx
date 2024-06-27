import { ChatMessageDataType } from '@/types/chatMessageDataType'
import { beforeMinute } from '@/utils/formattinfTime'

export default function ToChat({ msg }: { msg: ChatMessageDataType }) {
  return (
    <div key={msg.id} className="tospeech-bubble">
      <div className="font-semibold">{msg.nickName}</div>
      <div>{msg.message}</div>
      <div className="relative p-2">
        <span className="text-xs absolute right-0 bottom-0 pb-2 mr-2">
          {beforeMinute(msg.createAt)}
        </span>
      </div>
    </div>
  )
}
