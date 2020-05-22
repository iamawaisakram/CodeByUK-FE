import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

// * Atoms
import { DataEntriesAtom, TestResultsAtom } from '../../Recoil/Data/Atoms'

export default props => {
  const [dataEntries, setDataEntries] = useRecoilState(DataEntriesAtom)
  const [testResults, setTestResult] = useRecoilState(TestResultsAtom)

  useEffect(() => {
    console.log('called........', testResults)
  })
  return (
    <div id='test-results'>
      {dataEntries.map(entry => (
        <p key={entry.id}>{entry.id}</p>
      ))}
    </div>
  )
}
