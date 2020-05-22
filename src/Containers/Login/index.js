import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// * Custom Hooks
import { CheckIfTokenExists } from '../../Hooks/TokenHook'

// * Api calls
import { LoginAPI } from '../../Api/User'
import LoginView from '../../Views/LoginView'

export default props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let history = useHistory()
  CheckIfTokenExists()

  const loginUser = async () => {
    let result = await LoginAPI({ email, password })
    if (result) history.push('/')
  }

  const handleRegister = () => {
    history.push('/signup')
  }

  return (
    <LoginView
      {...props}
      loginUser={loginUser}
      password={password}
      setPassword={setPassword}
      email={email}
      setEmail={setEmail}
      handleRegister={handleRegister}
    />
  )
}
