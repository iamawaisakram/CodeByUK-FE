import React, { useState } from 'react'

// * Api calls
import { RegisterAPI } from '../../Api/User'

export default props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [town, setTown] = useState('')
  const [postcode, setPostcode] = useState('')

  const signupUser = () => {
    RegisterAPI({
      firstName,
      lastName,
      email,
      password,
      address,
      town,
      postcode
    })
  }

  return (
    <div id='signup'>
      <input
        type='text'
        className='firstName'
        value={firstName}
        placeholder='firstName'
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        type='text'
        className='lastName'
        value={lastName}
        placeholder='lastName'
        onChange={e => setLastName(e.target.value)}
      />
      <input
        type='text'
        className='email'
        value={email}
        placeholder='Email'
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type='text'
        className='password'
        value={password}
        placeholder='Password'
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type='text'
        className='address'
        value={address}
        placeholder='address'
        onChange={e => setAddress(e.target.value)}
      />
      <input
        type='text'
        className='town'
        value={town}
        placeholder='town'
        onChange={e => setTown(e.target.value)}
      />
      <input
        type='text'
        className='postcode'
        value={postcode}
        placeholder='postcode'
        onChange={e => setPostcode(e.target.value)}
      />
      <button onClick={() => signupUser()} className='submit'>
        Login
      </button>
    </div>
  )
}
