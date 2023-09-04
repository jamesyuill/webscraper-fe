import axios from 'axios';
import { capitaliseUnderscore } from './capitaliseUnderscore';

const api = axios.create({ baseURL: 'http://localhost:8080/api' });

export const getAllImages = (unformattedSearchTerm) => {
  const searchTerm = capitaliseUnderscore(unformattedSearchTerm);

  return api.get(`/images`, { params: { searchTerm } }).then((res) => {
    return res.data;
  });
};
