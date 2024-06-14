'use server'
import { cookies } from 'next/headers'

async function setCookie(key: string, value: string) {
  cookies().set(key, value)
}

export { setCookie }
