import axios from 'axios'
import { handleResponse } from '../providers'
import { api } from './baseUrl'

// const list = () =>
//     axios.get(`${api.cuerpoCotizacion}`).then(handleResponse);

const del = (id: number) =>
    axios.delete(`${api.cuerpoCotizacion}/${id}`).then(handleResponse);

const create = (data: any) =>
    axios.post(api.cuerpoCotizacion, data).then(handleResponse);

const update = (id: number, data: any) =>
    axios.put(`${api.cuerpoCotizacion}/${id}`, data).then(handleResponse);

const retrieve = (id: number) =>
    axios.get(`${api.cuerpoCotizacion}/${id}`).then(handleResponse);


export const cuerpoCotizacionService = {
//   list,
  del,
  create,
  retrieve,
  update
}
