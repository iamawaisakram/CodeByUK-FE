import { useHistory } from 'react-router-dom'

function TokenHook() {
  let history = useHistory()
  let token = localStorage.getItem('token')
  if (!token) {
    history.push('login')
  }
  return false
}

export default TokenHook
