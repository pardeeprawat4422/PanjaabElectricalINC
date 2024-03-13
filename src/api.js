import axios from 'axios';

const api = axios.create({
  baseURL: 'https://topdevit.com/clients/punjaab/public/api', 
});

export default api;