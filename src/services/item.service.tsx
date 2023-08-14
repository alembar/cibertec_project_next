import axios from "axios";
import { handleResponse } from "../providers";
import { api } from "./baseUrl";

const list = () => axios.get(`${api.item}`).then(handleResponse);

const del = (id: number) =>
    axios.delete(`${api.item}/${id}`).then(handleResponse);

const create = (data: any) => axios.post(api.item, data).then(handleResponse);

const update = (id: number, data: any) =>
    axios.put(`${api.item}/${id}`, data).then(handleResponse);

const retrieve = (id: number) =>
    axios.get(`${api.item}/${id}`).then(handleResponse);

export const itemService = {
    list,
    del,
    create,
    retrieve,
    update,
};
