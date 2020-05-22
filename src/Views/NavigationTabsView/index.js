import React from 'react'
import { useHistory } from 'react-router-dom'

// * Style
import './index.css'

export default props => {
  let history = useHistory()
  const handleLogout = () => {
    localStorage.setItem('token', '')
    history.push('/login')
  }
  return (
    <div id='topbar'>
      <img
        src={require('../../Assets/Images/logo.svg')}
        alt=''
        className='logo'
      />
      <div className='tabs-container'>
        <button className='tab'>
          <p>Micro App 1</p>
        </button>
      </div>
      <button className='logout' onClick={() => handleLogout()}>
        Logout
      </button>
    </div>
  )
}
