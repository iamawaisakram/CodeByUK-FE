import React, { useState } from 'react'

// * style
import './index.css'
import { AddDataAPI, GetTestResultsAPI } from '../../Api/Data'
import { useSetRecoilState } from 'recoil'
import { DataEntriesAtom, TestResultsAtom } from '../../Recoil/Data/Atoms'

export default props => {
  const [dataEntry, setDataEntry] = useState(0)
  const [logbookEntry, setLogbookEntry] = useState('')
  let setTestResults = useSetRecoilState(TestResultsAtom)

  const setDataEntryValues = useSetRecoilState(DataEntriesAtom)

  const handleSubmit = async () => {
    let result = await AddDataAPI({ value: dataEntry, logbookEntry })
    setDataEntryValues(result)
    setTestResults(await GetTestResultsAPI())
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
