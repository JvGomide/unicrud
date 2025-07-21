import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9501",
});

export const getCooperados = () => api.get("/cooperados");
export const getCooperado = (id) => api.get(`/cooperados/${id}`);
export const createCooperado = (data) => api.post("/cooperados", data);
export const updateCooperado = (id, data) => api.put(`/cooperados/${id}`, data);
export const deleteCooperado = (id) => api.delete(`/cooperados/${id}`);