import axios from 'axios';

export const api = axios.create({
  baseURL : 'https://my.api.mockaroo.com/transaction.json?key=a67a5a90'
})