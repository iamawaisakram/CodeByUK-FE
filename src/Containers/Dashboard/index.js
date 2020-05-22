import React, { useState, useEffect } from 'react'

// * HitoryHook
import TokenHook from '../../Hooks/TokenHook'

// * Components
import LoadingView from '../../Views/LoadingView'

export default props => {
  const [loading, setLoadingValue] = useState(true)
  let result = TokenHook()
  useEffect(() => {
    setLoadingValue(result)
  }, [result])

  if (loading) return <LoadingView />
  return <div id='login'>Dashboard</div>
}
