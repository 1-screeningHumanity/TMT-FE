import { userInformation } from '@/actions/myPage'
import { getFollowerList } from '@/actions/subscribe'
import Headers from '@/components/ui/Headers'
import SubTitleOfSubScribe from '@/components/ui/SubTitleOfSubScribe'
import SubscribeBox from '@/components/ui/SubscribeBox'

export default async function Follower() {
  const userInfo = await userInformation()
  const EncodedNickName = encodeURIComponent(userInfo)

  const res = await getFollowerList(EncodedNickName)
  const followerList = res?.data

  return (
    <section>
      <SubTitleOfSubScribe title="나를 구독한 사람 목록" />
      {followerList?.length === 0 ? (
        <p className="text-center my-10 text-slate-500">
          나를 구독한 사람이 없습니다.
        </p>
      ) : (
        followerList?.map(
          (item: { nickName: string; id: number; ranking?: number }) => {
            return (
              <SubscribeBox
                nickName={item?.nickName}
                key={item?.id}
                ranking={item?.ranking}
              />
            )
          },
        )
      )}
      <div className="mb-40"></div>
    </section>
  )
}
