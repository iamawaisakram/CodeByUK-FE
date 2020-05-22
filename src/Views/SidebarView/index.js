import React from 'react'
import { useSetRecoilState } from 'recoil'

// * Atom
import { ViewRenderAtom } from '../../Recoil/MicroApp1/Atoms'

// * Style
import './index.css'

export default props => {
  let setViewRenderState = useSetRecoilState(ViewRenderAtom)

  const handleViewChange = value => {
    setViewRenderState(value)
  }

  return (
    <div id='sidebar'>
      <div className='menu'>
        <button onClick={() => handleViewChange('home')} className='menu-item'>
          Home
        </button>
        <button onClick={() => handleViewChange('user')} className='menu-item'>
          Users
        </button>
      </div>
    </div>
  )
}
