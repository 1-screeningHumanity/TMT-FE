import { userInformation } from '@/actions/myPage'
import { getFollowingList } from '@/actions/subscribe'
import SubTitleOfSubScribe from '@/components/ui/SubTitleOfSubScribe'
import SubscribeBox from '@/components/ui/SubscribeBox'

export default async function Following() {
  const userInfo = await userInformation()
  const EncodedNickName = encodeURIComponent(userInfo)
  const res = await getFollowingList(EncodedNickName)
  const followingList = res?.data

  return (
    <section>
      <SubTitleOfSubScribe title="내가 구독한 사람 목록" />
      {followingList?.length === 0 ? (
        <p className="text-center my-10 text-slate-500">
          내가 구독한 사람이 없습니다.
        </p>
      ) : (
        followingList?.map(
          (item: { nickName: string; id: number; ranking?: number }) => {
            return (
              <SubscribeBox
                nickName={item?.nickName}
                ranking={item?.ranking}
                key={item?.id}
              />
            )
          },
        )
      )}

      <div className="mb-40"></div>
    </section>
  )
}
