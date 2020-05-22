import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

// * Atoms and Selectors
import { AllUsersAtom } from '../../Recoil/User/Atoms'

// * API calls
import { GetAllUsersAPI } from '../../Api/User'

// * Style
import './index.css'

export default props => {
  let [allUsers, setAllUsersHandler] = useRecoilState(AllUsersAtom)
  const [searchName, setSearchName] = useState('')
  const [searchId, setSearchId] = useState('')

  const searchUserHandler = () => {
    let users = []
    if (searchName) {
      allUsers.map(user => {
        let name = user.firstname.concat(' ', user.lastname)
        name = name.toLowerCase()
        if (name.includes(searchName.toLowerCase())) {
          if (!users.includes(user)) users.push(user)
        }
      })
    }
    if (searchId) {
      allUsers.map(user => {
        if (user.id == searchId) {
          if (!users.includes(user)) users.push(user)
        }
      })
    }
    setAllUsersHandler(users)
  }

  const resetHandler = async () => {
    setSearchName('')
    setSearchId('')
    let result = await GetAllUsersAPI()
    setAllUsersHandler(result)
  }

  return (
    <div id='users-listing'>
      <div className='title-div'>
        <input
          type='text'
          value={searchName}
          className='input'
          placeholder='Search By Name'
          onChange={e => setSearchName(e.target.value)}
        />
        <input
          type='number'
          value={searchId}
          className='input'
          placeholder='Search By Id'
          onChange={e => setSearchId(e.target.value)}
        />
        <button onClick={() => searchUserHandler()} className='submit-btn'>
          Submit
        </button>
        <button onClick={() => resetHandler()} className='reset-btn'>
          Reset
        </button>
      </div>
      <div className='users-listing-result'>
        {allUsers.map(entry => (
          <div className='entry' key={entry.id}>
            <p className='date'>
              {entry.firstname} {entry.lastname}
            </p>
            <p className='date'>{entry.address}</p>
            <p className='date'>{entry.postcode}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
