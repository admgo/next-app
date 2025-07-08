export let apiUriPrefix = ''
export let authUriPrefix = ''

if (
  process.env.NEXT_PUBLIC_API_PREFIX
  && process.env.NEXT_PUBLIC_PUBLIC_API_PREFIX
) {
  apiUriPrefix = process.env.NEXT_PUBLIC_API_PREFIX
  authUriPrefix = process.env.NEXT_PUBLIC_PUBLIC_API_PREFIX
}
 else {
  apiUriPrefix = 'http://localhost:8080'
  authUriPrefix = 'http://localhost:8080/auth'
}

export const API_URI_PREFIX: string = apiUriPrefix
export const AUTH_URI_PREFIX: string = authUriPrefix
