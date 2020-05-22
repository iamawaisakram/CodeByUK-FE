import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

// * Atoms and Selectors
import {
  DataEntriesAtom,
  ReminderEntriesAtom,
  TestResultsAtom
} from '../../Recoil/Data/Atoms'
import {
  GetDataEntriesQuery,
  GetReminderEntriesQuery,
  GetTestResultsQuery
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
  let setTestResults = useSetRecoilState(TestResultsAtom)

  setDataEntries(useRecoilValue(GetDataEntriesQuery))
  setReminderEntries(useRecoilValue(GetReminderEntriesQuery))
  setTestResults(useRecoilValue(GetTestResultsQuery))

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
