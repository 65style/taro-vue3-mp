import request from '@/utils/request'
import { baseUrl } from './url'

interface IPerson {
  name: string
  age: number
  avatar: string
}
export const getTest = async () => {
  return await request<IPerson[]>({ url: `${baseUrl}/success` })
}

export const getError = async () => {
  return await request<IPerson[]>({ url: `${baseUrl}/success-message` })
}

export const getFail = async () => {
  return await request<IPerson[]>({ url: `${baseUrl}/error` })
}

export const getEmpty = async () => {
  return await request<IPerson[]>({ url: `http://localhost1` })
}
