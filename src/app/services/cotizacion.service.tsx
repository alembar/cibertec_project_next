import axios from 'axios'
import { handleResponse } from '../providers'
import { api } from './baseUrl'

const get = (param: string) =>
    axios.get(`${api.cotizacion}?${param}`).then(handleResponse);

export const cotizacionService = {
  get
}
