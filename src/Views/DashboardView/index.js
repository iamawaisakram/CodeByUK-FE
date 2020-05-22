import React from 'react'

// * View Components
import NavigationTabsView from '../NavigationTabsView'
import SidebarView from '../SidebarView'
import MicroApp1View from '../MicroApp1View'

// * style
import './index.css'

export default props => {
  return (
    <div id='dashboard'>
      <NavigationTabsView />
      <div className='dash-body'>
        <SidebarView />
        <MicroApp1View />
      </div>
    </div>
  )
}
