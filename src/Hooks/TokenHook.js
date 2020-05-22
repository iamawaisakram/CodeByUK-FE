import { useHistory } from 'react-router-dom'

export default () => {
  let history = useHistory()
  let token = localStorage.getItem('token')
  if (!token) {
    history.push('login')
  }
  return false
}

export const CheckIfTokenExists = () => {
  let history = useHistory()
  let token = localStorage.getItem('token')
  if (token) {
    history.push('/')
  }
  return false
}
