import axios from 'axios';

const options = {
  baseURL: 'https://jsonplaceholder.typicode.com/',
};

const Fetch = axios.create(options);

export default Fetch;
