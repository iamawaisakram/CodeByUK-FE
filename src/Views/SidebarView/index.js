import React from 'react'

// * Style
import './index.css'

export default props => {
  return (
    <div id='sidebar'>
      <div className='menu'>
        <button className='menu-item'>Home</button>
        <button className='menu-item'>Users</button>
      </div>
    </div>
  )
}
