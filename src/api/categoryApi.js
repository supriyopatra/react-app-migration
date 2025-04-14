import axios from "axios";
const API_BASE = 'https://api.escuelajs.co';

export const categoryList = () => {
    return axios.get(`${API_BASE}/api/v1/categories`);
  };

export const getSingleCategory =(id)=>{
    return axios.get(`${API_BASE}/api/v1/categories/${id}`);
}

export const updateCategory =(id,body)=>{
    return axios.put(`${API_BASE}/api/v1/categories/${id}`,body);
}

export const addCategory = (data)=>{
    return axios.post(`${API_BASE}/api/v1/categories`,data);
}