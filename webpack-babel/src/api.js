import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.coindesk.com/v1/bpi/currentprice.json'
});


export default api;