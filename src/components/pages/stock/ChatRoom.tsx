import { userInformation } from '@/actions/myPage'
import { chatMessage } from '@/lib/chatmessage'
import { beforeMinute } from '@/utils/formattinfTime'

export default async function ChatRoom() {
  const message = chatMessage
  const myNicknameData = await userInformation()
  const myNickname = myNicknameData.data.nickname

  return (
    <section className="flex flex-col mb-32">
      {message.map((msg) =>
        msg.sender == 'c583a6d3-bcc8-4e00-a0ca-466be206fffe' ? (
          <div key={msg.id} className="speech-bubble">
            <div className="font-semibold">{msg.sender}</div>
            <div>{msg.message}</div>
            <div className="relative p-2">
              <span className="text-xs absolute right-0 bottom-0 pb-2 mr-2">
                {beforeMinute(msg.createAt)}
              </span>
            </div>
          </div>
        ) : (
          <div key={msg.id} className="tospeech-bubble">
            <div className="font-semibold">{msg.sender}</div>
            <div>{msg.message}</div>
            <div className="relative p-2">
              <span className="text-xs absolute right-0 bottom-0 pb-2 mr-2">
                {beforeMinute(msg.createAt)}
              </span>
            </div>
          </div>
        ),
      )}
    </section>
  )
}
