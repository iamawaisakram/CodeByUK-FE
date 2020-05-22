import React from 'react'
import { useHistory } from 'react-router-dom'

export default props => {
  let history = useHistory()
  const handleLogout = () => {
    localStorage.setItem('token', '')
    history.push('/login')
  }
  return (
    <div id='topbar'>
      <button className='logout' onClick={() => handleLogout()}>
        Logout
      </button>{' '}
    </div>
  )
}
