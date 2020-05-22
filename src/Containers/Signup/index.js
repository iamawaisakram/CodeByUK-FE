import React, { useState } from 'react'

// * Custom Hooks
import { CheckIfTokenExists } from '../../Hooks/TokenHook'
import { useHistory } from 'react-router-dom'

// * Api calls
import { RegisterAPI } from '../../Api/User'
import SignupView from '../../Views/SignupView'

export default props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [town, setTown] = useState('')
  const [postcode, setPostcode] = useState('')

  let history = useHistory()

  CheckIfTokenExists()

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

  const handleLogin = () => {
    history.push('/login')
  }

  return (
    <div id='signup'>
      <SignupView
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        address={address}
        town={town}
        postcode={postcode}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPassword={setPassword}
        setAddress={setAddress}
        setTown={setTown}
        setPostcode={setPostcode}
        signupUser={signupUser}
        handleLogin={handleLogin}
      />
    </div>
  )
}
