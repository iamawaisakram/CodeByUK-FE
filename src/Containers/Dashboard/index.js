import React, { useState, useEffect } from 'react'

// * HitoryHook
import TokenHook from '../../Hooks/TokenHook'

export default props => {
  const [loading, setLoadingValue] = useState(true)
  let result = TokenHook()
  useEffect(() => {
    setLoadingValue(result)
  }, [result])
  return <div id='login'>{!loading && 'Dashboard'}</div>
}
