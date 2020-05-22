import React from 'react'

// * View Components
import TestResultsView from '../TestResultsView'
import AddDataView from '../AddDataView'
import LogBookView from '../LogbookView'
import RemindersView from '../RemindersView'
import UsersListingView from '../UsersListingView'

export default props => {
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
