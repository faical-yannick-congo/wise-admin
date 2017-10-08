import { request, config } from 'utils'

const { api } = config
const { foods } = api

export async function query (params) {
  return request({
    url: foods,
    method: 'get',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: foods,
    method: 'delete',
    data: params,
  })
}
