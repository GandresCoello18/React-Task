import * as axios from 'axios'

const apiDev = 'https://jsonplaceholder.typicode.com'

export const BASE_API = apiDev

export const api = axios.default.create({
  baseURL: `${BASE_API}`,
})