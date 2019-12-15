import axios from 'axios';
import { API_DETAILS } from './config';

export default axios.create({
  baseURL: API_DETAILS.BASE_URL,
  responseType: 'json'
});