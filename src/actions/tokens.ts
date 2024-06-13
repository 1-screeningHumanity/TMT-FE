'use server'

import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

const getAccessToken = async () => {
  const session = await getServerSession(options)
  console.log('session in tokens.ts :', session)
  const accessToken = `Bearer ${session?.user.data.accessToken}`

  return accessToken
}

const getRefreshToken = async () => {
  const session = await getServerSession(options)
  const refreshToken = `Bearer ${session?.user.data.refreshToken}`
  return refreshToken
}
export { getAccessToken, getRefreshToken }
