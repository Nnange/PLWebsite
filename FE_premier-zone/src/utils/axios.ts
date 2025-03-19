import Axios from 'axios';
import {env} from '$env/dynamic/public'

const baseUrl = env.PUBLIC_BACKEND_URL;

export const axios = Axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    }
});
