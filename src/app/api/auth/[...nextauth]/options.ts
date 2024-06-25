import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'

export const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        phoneNumber: { label: 'phoneNumber', type: 'text' },
        name: { label: 'name', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (
          !credentials?.phoneNumber ||
          !credentials?.name ||
          !credentials?.password
        ) {
          return null
        }

        const res = await fetch(`${process.env.API_BASE_URL}/member/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: credentials.name,
            password: credentials.password,
            phoneNumber: credentials.phoneNumber,
          }),
        })

        if (res.ok) {
          const user = await res.json()
          console.log('user : ', user)

          return user
        }

        throw new Error('Failed to login')
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || '',
      clientSecret: process.env.NAVER_CLIENT_SECRET || '',
    }),
  ],

  callbacks: {
    async signIn({ user, profile }) {
      console.log(user)
      console.log(profile)
      return true
    },
    async jwt({ token, user }) {
      // if (user) {
      //   console.log('jwt user :', user)
      // } else {
      //   console.log('jwt user is null')
      // }
      return { ...token, ...user }
    },

    async session({ session, token }) {
      session.user = token as any

      return session
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl
    },
  },
  pages: {
    signIn: '/member/signin',
    error: '/member/signin',
  },
}

export default NextAuth(options)
