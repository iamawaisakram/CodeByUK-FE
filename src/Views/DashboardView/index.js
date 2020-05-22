import React from 'react'

// * View Components
import NavigationTabsView from '../NavigationTabsView'
import SidebarView from '../SidebarView'
import MicroApp1View from '../MicroApp1View'

export default props => {
  return (
    <div id='dashboard'>
      <NavigationTabsView />
      <SidebarView />
      <MicroApp1View />
    </div>
  )
}
