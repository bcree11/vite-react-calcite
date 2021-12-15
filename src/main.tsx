import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import '@esri/calcite-components/dist/calcite/calcite.css';
import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';

setAssetPath(document.baseURI+"main.tsx");
defineCustomElements();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
