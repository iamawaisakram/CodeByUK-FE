import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

// * Atoms
import { TestResultsAtom } from '../../Recoil/Data/Atoms'

export default props => {
  const testResults = useRecoilState(TestResultsAtom)[0]

  useEffect(() => {
    console.log('called........', testResults)
  })
  return (
    <div id='test-results'>
      {/* {dataEntries.map(entry => (
        <p key={entry.id}>{entry.id}</p>
      ))} */}
    </div>
  )
}
