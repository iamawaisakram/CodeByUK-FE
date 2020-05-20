import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

// * App File
import CharacterCounter from './App';

// * Styling
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
