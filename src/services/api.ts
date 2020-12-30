import axios from 'axios';
import { endpoints } from '../config/config';

export const ecommerceApi = axios.create({
  baseURL: endpoints.ecommerceUrl,
});

export const ipApi = axios.create({
  baseURL: 'http://ip-api.com/json/',
});
