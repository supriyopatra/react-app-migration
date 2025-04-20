import axios from "axios";

const API_BASE = 'https://api.escuelajs.co';

export const productList = async ()=>{
    return await axios.get(`${API_BASE}/api/v1/products`);
}

export const singleProduct = async (id)=>{
    return await axios.get(`${API_BASE}/api/v1/products/${id}`);
}

export const productImageUpload = async (formData)=>{
    return await axios.post(`${API_BASE}/api/v1/files/upload`,formData);
}

export const addProduct = async (data)=>{
    return await axios.post(`${API_BASE}/api/v1/products`,data);
}