import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'

// * Routes
import Routes from './Routes'

// * Styling
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
