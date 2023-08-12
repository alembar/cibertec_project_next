import axios from 'axios'
import { handleResponse } from '../providers'
import { api } from './baseUrl'

const list = () =>
    axios.get(`${api.cotizacion}`).then(handleResponse);

const del = (id:number) =>
    axios.delete(`${api.cotizacion}/${id}`).then(handleResponse)

const create = (data: any) =>
    axios.post(api.cotizacion, data).then(handleResponse)

const update = (id: number, data: any) =>
    axios.put(`${api.cotizacion}/${id}`, data).then(handleResponse)

const retrieve = (id: number) =>
    axios.get(`${api.cotizacion}/${id}`).then(handleResponse)


export const cotizacionService = {
  list,
  del,
  create,
  retrieve,
  update
}
