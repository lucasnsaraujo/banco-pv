import axios from 'axios';

export const api = axios.create({
  baseURL : 'https://bancopv-e728.restdb.io/rest'
})

api.defaults.headers.post['Content-Type'] = 'application/json';
api.defaults.headers.common['x-apikey'] = 'f82c34f216b81c844a0f82d4b681dd99e9f42';