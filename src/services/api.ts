import axios from 'axios';

export const ecommerceApi = axios.create({
  baseURL: process.env.REACT_APP_ECOMMERCE_URL,
});

export const ipApi = axios.create({
  baseURL: 'http://ip-api.com/json/',
});
