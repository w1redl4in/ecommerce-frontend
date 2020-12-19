import axios from 'axios';

export const ecommerceApi = axios.create({
  baseURL: 'http://localhost:3500/ecommerce',
});

export const ipApi = axios.create({
  baseURL: 'http://ip-api.com/json/',
});
