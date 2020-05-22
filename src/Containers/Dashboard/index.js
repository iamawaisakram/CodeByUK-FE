import React, { useState, useEffect } from 'react'

// * HitoryHook
import TokenHook from '../../Hooks/TokenHook'

// * View Components
import LoadingView from '../../Views/LoadingView'
import DashboardView from '../../Views/DashboardView'

export default props => {
  const [loading, setLoadingValue] = useState(true)
  let result = TokenHook()

  useEffect(() => {
    setLoadingValue(result)
  }, [result])

  if (loading) return <LoadingView />
  return <DashboardView {...props} />
}
