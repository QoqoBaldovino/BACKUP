import axios from 'axios'
const baseUrl = '/api/phonebook'

const getAll = () => {
  console.log('GETAL')
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const remove = (id) => {
  
  return axios.delete(`${baseUrl}/${id}`)
}

const services = {getAll, create, update, remove}

export default services