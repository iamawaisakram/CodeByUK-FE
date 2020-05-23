import axios from 'axios'

// * Config File
import { SERVER_URL } from '../../Config'

// *********************** GET TOKEN SAVED AFTER LOGIN
const GetToken = () => {
  let token = localStorage.getItem('token')
  if (!token) {
    return null
  }
  return token
}

// *********************** SET OPTIONS FOR AXIOS API CALL
const GetOptions = isFile => {
  let options = {
    headers: {
      token: GetToken(),
      'Content-Type': 'application/json'
    }
  }

  if (isFile) {
    options['headers']['Content-Type'] = 'multipart/form-data'
  }

  return options
}

// *********************** PREPEND SERVER URL
const PrependURL = (api, isCompleteURL) => {
  if (isCompleteURL) return api
  return `${SERVER_URL}${api}`
}

// *********************** WRAPPER ITSELF
const Wrapper = {
  GET: (api, isCompleteURL = false, isFile = false) =>
    axios.get(PrependURL(api, isCompleteURL), GetOptions(isFile)),
  POST: (api, formData = {}, isFile = false) =>
    axios.post(PrependURL(api), formData, GetOptions(isFile)),
  PUT: (api, formData = {}) =>
    axios.put(PrependURL(api), formData, GetOptions()),
  DELETE: api => axios.delete(PrependURL(api), GetOptions())
}

export default Wrapper
