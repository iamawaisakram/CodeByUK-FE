import React from 'react'

// * Style
import './index.css'

export default props => {
  return (
    <div id='login'>
      <img
        src={require('../../Assets/Images/background.svg')}
        alt='background'
        className='background'
      />
      <div className='input-container'>
        <img
          src={require('../../Assets/Images/logo.svg')}
          alt='logo '
          className='logo'
        />
        <p className='sub-head'>Admin Portal</p>
        <input
          type='text'
          className='input'
          autoComplete={'nope'}
          value={props.email}
          placeholder='Email'
          onChange={e => props.setEmail(e.target.value)}
        />
        <input
          type='password'
          className='input'
          value={props.password}
          autoComplete={'nope'}
          placeholder='Password'
          onChange={e => props.setPassword(e.target.value)}
        />

        {/* <p className='forgot-passwrod'>Forgot Password</p> */}

        <button onClick={() => props.loginUser()} className='submit-btn'>
          Login
        </button>
        <button onClick={() => props.handleRegister()} className='register-btn'>
          Register Account
        </button>
      </div>
    </div>
  )
}
