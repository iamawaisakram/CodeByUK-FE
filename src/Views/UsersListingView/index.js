import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

// * Atoms and Selectors
import { AllUsersAtom } from '../../Recoil/User/Atoms'

// * Style
import './index.css'

export default props => {
  let [allUsers, setAllUsersHandler] = useRecoilState(AllUsersAtom)
  const [searchName, setSearchName] = useState('')
  const [searchId, setSearchId] = useState('')

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
          type='text'
          value={searchId}
          className='input'
          placeholder='Search By Id'
          onChange={e => setSearchId(e.target.value)}
        />
        <button className='submit-btn'>Submit</button>
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
