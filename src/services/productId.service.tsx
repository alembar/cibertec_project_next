import axios from 'axios'
import { handleResponse } from '../providers'
import { api } from './baseUrl'

const get = (param: string, id: any) =>
  axios.get(`${api.cotizacion}${id}?${param}`).then(handleResponse)

export const productIdService = {
  get
}
