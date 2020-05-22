import React from 'react'

// * Style
import './index.css'

export default props => {
  return (
    <div id='signup'>
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
        <p className='sub-head'>Register</p>
        <input
          type='text'
          className='input'
          value={props.firstName}
          placeholder='First Name'
          onChange={e => props.setFirstName(e.target.value)}
        />
        <input
          type='text'
          className='input'
          value={props.lastName}
          placeholder='Last Name'
          onChange={e => props.setLastName(e.target.value)}
        />
        <input
          type='text'
          className='input'
          value={props.email}
          placeholder='Email'
          onChange={e => props.setEmail(e.target.value)}
        />
        <input
          type='password'
          className='input'
          value={props.password}
          placeholder='Password'
          onChange={e => props.setPassword(e.target.value)}
        />

        <input
          type='text'
          className='input'
          value={props.address}
          placeholder='Address'
          onChange={e => props.setAddress(e.target.value)}
        />
        <input
          type='text'
          className='input'
          value={props.town}
          placeholder='Town'
          onChange={e => props.setTown(e.target.value)}
        />
        <input
          type='text'
          className='input'
          value={props.postcode}
          placeholder='Postcode'
          onChange={e => props.setPostcode(e.target.value)}
        />

        <button onClick={() => props.signupUser()} className='submit-btn'>
          Register
        </button>
        <button onClick={() => props.handleLogin()} className='login-btn'>
          Login
        </button>
      </div>
    </div>
  )
}
