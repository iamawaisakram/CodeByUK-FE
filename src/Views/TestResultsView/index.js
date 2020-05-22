import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

// * Atoms
import { TestResultsAtom } from '../../Recoil/Data/Atoms'

// * Style
import './index.css'

export default props => {
  const testResults = useRecoilState(TestResultsAtom)[0]

  return (
    <div id='test-results'>
      <div className='title-div'>
        <p className='title'>Test Results</p>
      </div>
      <div className='tests-div'>
        <div className='min-container'>
          <p>Low</p>
          <div className='min-div-1'>
            <div className='min-div'>
              <p className='min'>{testResults.min}</p>
            </div>
          </div>
        </div>
        <div className='latest-div-1'>
          <div className='latest-div'>
            <p className='latest'>{testResults.latest}</p>
          </div>
        </div>
        <div className='max-container'>
          <p>High</p>
          <div className='max-div-1'>
            <div className='max-div'>
              <p className='max'>{testResults.max}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
