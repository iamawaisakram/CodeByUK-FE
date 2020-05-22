import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

// * Components
import LoginView from '../../Views/LoginView'

// * Custom Hooks
import { CheckIfTokenExists } from '../../Hooks/TokenHook'

// * Api calls
import { LoginAPI } from '../../Api/User'

// * Validations
import { LoginValidations } from '../../Helpers/Validations'

export default props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let history = useHistory()
  CheckIfTokenExists()

  const loginUser = async () => {
    let error = LoginValidations(email, password)
    if (error) {
      toast.error(error)
      return
    }
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
