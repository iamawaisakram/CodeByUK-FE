import React from 'react'
import { useRecoilState } from 'recoil'

// * Atoms
import { DataEntriesAtom } from '../../Recoil/Data/Atoms'

export default props => {
  const [dataEntries, setDataEntries] = useRecoilState(DataEntriesAtom)

  return (
    <div id='test-results'>
      {dataEntries.map(entry => (
        <p key={entry.id}>{entry.id}</p>
      ))}
    </div>
  )
}
