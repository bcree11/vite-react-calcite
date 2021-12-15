import React from 'react'
import ReactDOM from 'react-dom'

import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';

import App from './App'

import './index.css'
import '@esri/calcite-components/dist/calcite/calcite.css';

setAssetPath(location.href);
defineCustomElements();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
