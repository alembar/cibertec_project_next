import axios from 'axios'
import { handleResponse } from '../providers'
import { api } from './baseUrl'

const list = () => axios.get(`${api.cliente}`).then(handleResponse);

const del = (id: number) =>
    axios.delete(`${api.cliente}/${id}`).then(handleResponse);

const create = (data: any) =>
    axios.post(api.cliente, data).then(handleResponse);

const update = (id: number, data: any) =>
    axios.put(`${api.cliente}/${id}`, data).then(handleResponse);

const retrieve = (id: number) =>
    axios.get(`${api.cliente}/${id}`).then(handleResponse);


export const clienteService = {
  list,
  del,
  create,
  retrieve,
  update
}
