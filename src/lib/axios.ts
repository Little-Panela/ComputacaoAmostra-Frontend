import axios from 'axios'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

if (!apiUrl) {
  throw Error('Invalid base URL.')
}

export const api = axios.create({
  baseURL: apiUrl,
})