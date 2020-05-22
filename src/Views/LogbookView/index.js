import React from 'react'
import { useRecoilState } from 'recoil'
import moment from 'moment'

// * Atoms
import { DataEntriesAtom } from '../../Recoil/Data/Atoms'

// * Style
import './index.css'

export default props => {
  let logbookEntries = useRecoilState(DataEntriesAtom)[0]

  return (
    <div id='logbook'>
      <div className='title-div'>
        <p className='title'>Logbook</p>
      </div>
      <div className='logbook-result'>
        {logbookEntries.map(entry => (
          <div className='entry' key={entry.id}>
            <p className='date'>
              {moment(entry.createdAt).format('MMMM Do YYYY')}
            </p>
            <div className='value'>{entry.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
