import axios from 'axios';

const api = axios.create ({
    baseURL: 'https://cryptic-hollows-60375.herokuapp.com'
});

export default api;