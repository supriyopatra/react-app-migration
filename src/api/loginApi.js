import axios from "axios";
const API_BASE = 'https://api.escuelajs.co';

export const loginUser = (credentials) => {
    return axios.post(`${API_BASE}/api/v1/auth/login`, credentials);
  };
