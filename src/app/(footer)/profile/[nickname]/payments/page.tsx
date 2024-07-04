import { userInformation } from '@/actions/myPage'
import { cashInfoAPI } from '@/actions/wallet'
import ButtonOfSubscribePayments from '@/components/pages/profile/ButtonOfSubscribePayments'
import Headers from '@/components/ui/Headers'

export default async function SubscribePayments({
  params,
}: {
  params: { nickname: string }
}) {
  const nick = decodeURI(params.nickname)
  const cashInfo = await cashInfoAPI()
  const cash = cashInfo?.data?.cash

  const userInfo = await userInformation()

  return (
    <section className="h-[82vh] bg-gradient-to-br from-blue-100 to-purple-200 p-8 rounded-lg shadow-lg w-full">
      <div className="max-w-md mx-auto h-[70vh] bg-white p-6 rounded-lg shadow-md mt-4">
        <h1 className="text-xl font-bold text-center text-gray-800 my-10">
          <span className="text-purple-500">{nick}</span> 님을 구독하시겠습니까?
        </h1>
        <div className="text-lg text-gray-700 mb-52 mt-20">
          <p className="mb-2">
            보유 캐시:{' '}
            <span className="font-semibold text-indigo-600">{cash} 캐시</span>
          </p>
          <p className="mb-2">
            결제 할 금액:{' '}
            <span className="font-semibold text-red-600">1000 캐시</span>
          </p>
          <p className="text-sm text-gray-500">
            기존에 구독한 회원인 경우 과금되지 않습니다.
          </p>
        </div>
        <ButtonOfSubscribePayments nickname={nick} myNick={userInfo} />
      </div>
    </section>
  )
}
