import React, { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

// * Atoms and Selectors
import { DataEntriesAtom, ReminderEntriesAtom } from '../../Recoil/Data/Atoms'
import {
  GetDataEntriesQuery,
  GetReminderEntriesQuery
} from '../../Recoil/Data/Selectors'

// * View Components
import TestResultsView from '../TestResultsView'
import AddDataView from '../AddDataView'
import LogBookView from '../LogbookView'
import RemindersView from '../RemindersView'
import UsersListingView from '../UsersListingView'

export default props => {
  let setDataEntries = useSetRecoilState(DataEntriesAtom)
  let setReminderEntries = useSetRecoilState(ReminderEntriesAtom)

  setDataEntries(useRecoilValue(GetDataEntriesQuery))
  setReminderEntries(useRecoilValue(GetReminderEntriesQuery))

  return (
    <div id='micrp-app-1'>
      <>
        <TestResultsView />
        <AddDataView />
        <LogBookView />
        <RemindersView />
      </>
      <UsersListingView />
    </div>
  )
}
