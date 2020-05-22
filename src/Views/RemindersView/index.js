import React from 'react'
import { useRecoilState } from 'recoil'
import moment from 'moment'

// * Atoms
import { ReminderEntriesAtom } from '../../Recoil/Data/Atoms'

// * Style
import './index.css'

export default props => {
  let reminderEntries = useRecoilState(ReminderEntriesAtom)[0]
  return (
    <div id='reminders'>
      <div className='title-div'>
        <p className='title'>Reminders</p>
      </div>
      <div className='reminders-result'>
        {reminderEntries.map(entry => (
          <div className='entry' key={entry.id}>
            <p className='date'>{entry.time}</p>
            <p className='date'>{entry.routine}</p>
            <p className='date'>{entry.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
