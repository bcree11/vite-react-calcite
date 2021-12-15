import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import '@esri/calcite-components/dist/calcite/calcite.css';
import { CalciteButton, CalciteValueList, CalciteValueListItem } from "@esri/calcite-components-react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <div style={{width: "200px", paddingBottom: "30px"}}>
          <CalciteButton>Random</CalciteButton>
        </div>
        <div style={{width: "200px"}}>
          <CalciteValueList drag-enabled>
            <CalciteValueListItem label="Dogs" value="dogs"></CalciteValueListItem>
            <CalciteValueListItem label="Cats" value="cats"></CalciteValueListItem>
          </CalciteValueList>
        </div>
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
