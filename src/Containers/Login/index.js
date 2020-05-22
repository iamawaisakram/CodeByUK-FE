import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// * Custom Hooks
import { CheckIfTokenExists } from '../../Hooks/TokenHook'

// * Api calls
import { LoginAPI } from '../../Api/User'

export default props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let history = useHistory()
  CheckIfTokenExists()

  const loginUser = async () => {
    let result = await LoginAPI({ email, password })
    if (result) history.push('/')
  }

  return (
    <div id='login'>
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
      <button onClick={() => loginUser()} className='submit'>
        Login
      </button>
    </div>
  )
}
