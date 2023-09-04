import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:8080/api' });

export const getAllImages = (searchTerm) => {
  return api.get(`/images`, { params: { searchTerm } }).then((res) => {
    return res.data;
  });
};
