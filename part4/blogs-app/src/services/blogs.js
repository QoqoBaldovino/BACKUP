import axios from 'axios'
const baseURL = '/api/blogs'

const getAll = () => {
  return axios.get(baseURL);
}

const services = {getAll}

export default services;