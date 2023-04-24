import axios from 'axios';
export const Axios = axios.create({
  // baseURL: 'https://xplor-ev.herokuapp.com/api/',
  // baseURL: 'http://localhost:5000/api/',
  baseURL: 'https://xploreev.cyclic.app/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: localStorage.getItem('ltk') || '',
  },
  maxContentLength: 20 * 1000 * 1000, // bytes => 5 MB
});
