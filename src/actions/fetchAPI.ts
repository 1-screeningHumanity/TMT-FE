'use server'
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

async function fetchAPI(
  method: Method,
  url: string,
  body?: object,
  token?: string,
  cache?: string,
) {

  try {
    let headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    }
    if (token != null || token !== undefined) {
      token = token.replace(/(?:\\[rn]|[\r\n]+)+/g, '')
      headers['Authorization'] = `${token}`
    }
    let cache = 'no-cache'
    if (cache != null || cache !== undefined) {
      cache = `${cache}`
    }

    let options: RequestInit = {
      method: method,
      headers: headers,
      cache: 'no-cache',
    }

    // GET 메서드가 아닌 경우에만 body를 추가합니다.
    if (method !== 'GET' || body !== undefined) {
      options.body = JSON.stringify(body)
    }

    const response = await fetch(`${process.env.API_BASE_URL}${url}`, options)

    return response.json()
  } catch (error) {
    throw error
  }
}
function GetAPI(url: string, params?: object, token?: string, cache?: string) {
  if (params != undefined) {
    const urlParams = new URLSearchParams().toString()

    url = `${url}?${urlParams}`
  }
  return fetchAPI('GET', url, undefined, token)
}
function PostAPI(url: string, body?: object, token?: string) {
  return fetchAPI('POST', url, body, token)
}
function PutAPI(url: string, body: object, token?: string) {
  return fetchAPI('PUT', url, body, token)
}
function DeleteAPI(url: string, body?: object, token?: string) {
  return fetchAPI('DELETE', url, body, token)
}
function PatchAPI(url: string, body: object, token?: string) {
  return fetchAPI('PATCH', url, body, token)
}

export { GetAPI, PostAPI, PutAPI, DeleteAPI, PatchAPI }
