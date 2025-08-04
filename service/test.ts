import type { Fetcher } from 'swr'
import { post } from './base'

export const Test: Fetcher<{ name: string }, { username: string; uid: string }> = ({ username, uid }) => {
    return post<{ name: string }>('authorize/12', { query: { username, uid } })
}
