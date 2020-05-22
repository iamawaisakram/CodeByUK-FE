import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'

// * Atoms
import { DataEntriesAtom, TestResultsAtom } from '../../Recoil/Data/Atoms'

// * API Calls
import { AddDataAPI, GetTestResultsAPI } from '../../Api/Data'

// * style
import './index.css'

export default props => {
  const [dataEntry, setDataEntry] = useState(0)
  const [logbookEntry, setLogbookEntry] = useState('')
  let setTestResults = useSetRecoilState(TestResultsAtom)

  const setDataEntryValues = useSetRecoilState(DataEntriesAtom)

  const handleSubmit = async () => {
    try {
      if (dataEntry && logbookEntry) {
        let result = await AddDataAPI({ value: dataEntry, logbookEntry })
        setDataEntryValues(result)
        setTestResults(await GetTestResultsAPI())
      } else {
        // TODO: Add Error Notification
        alert('values missing')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div id='add-data'>
      <div className='title-div'>
        <p className='title'>Add Data</p>
      </div>
      <div className='body-div'>
        <input
          type='number'
          className='input'
          value={dataEntry}
          placeholder='Value'
          onChange={e => setDataEntry(e.target.value)}
        />
        <input
          type='text'
          className='input'
          value={logbookEntry}
          placeholder='Logbook Entry'
          onChange={e => setLogbookEntry(e.target.value)}
        />
        <button onClick={() => handleSubmit()} className='submit-btn'>
          Add Value
        </button>
      </div>
    </div>
  )
}
