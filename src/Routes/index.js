import React, { useLayoutEffect, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// * Containers
import Login from '../Containers/Login'
import Signup from '../Containers/Signup'
import Dashboard from '../Containers/Dashboard'

function Routes() {
  useEffect(() => {})
  useLayoutEffect(() => {}, [])

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
      </Switch>
    </Router>
  )
}

export default Routes
