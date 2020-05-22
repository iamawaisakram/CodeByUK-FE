import React from 'react'
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'

// * Atoms and Selectors
import {
  DataEntriesAtom,
  ReminderEntriesAtom,
  TestResultsAtom
} from '../../Recoil/Data/Atoms'
import { ViewRenderAtom } from '../../Recoil/MicroApp1/Atoms'
import { AllUsersAtom } from '../../Recoil/User/Atoms'
import {
  GetDataEntriesQuery,
  GetReminderEntriesQuery,
  GetTestResultsQuery
} from '../../Recoil/Data/Selectors'
import { GetAllUserQuery } from '../../Recoil/User/Selectors'

// * View Components
import TestResultsView from '../TestResultsView'
import AddDataView from '../AddDataView'
import LogBookView from '../LogbookView'
import RemindersView from '../RemindersView'
import UsersListingView from '../UsersListingView'

// * Style
import './index.css'

export default props => {
  let RenderValue = useRecoilState(ViewRenderAtom)[0]
  // TODO: Try to move these calls down to the elements
  let setDataEntries = useSetRecoilState(DataEntriesAtom)
  let setReminderEntries = useSetRecoilState(ReminderEntriesAtom)
  let setTestResults = useSetRecoilState(TestResultsAtom)
  let setAllUsersHandler = useSetRecoilState(AllUsersAtom)

  setDataEntries(useRecoilValue(GetDataEntriesQuery))
  setReminderEntries(useRecoilValue(GetReminderEntriesQuery))
  setTestResults(useRecoilValue(GetTestResultsQuery))
  setAllUsersHandler(useRecoilValue(GetAllUserQuery))

  return (
    <div id='micrp-app-1'>
      {RenderValue === 'home' && (
        <div className='home'>
          <TestResultsView />
          <AddDataView />
          <LogBookView />
          <RemindersView />
        </div>
      )}
      {RenderValue === 'user' && <UsersListingView />}
    </div>
  )
}
