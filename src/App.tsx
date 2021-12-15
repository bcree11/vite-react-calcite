import { useEffect, useRef, useState } from 'react'

import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

import './App.css'

import { CalciteButton, CalciteValueList, CalciteValueListItem } from "@esri/calcite-components-react";

function App() {
  const [count, setCount] = useState(0)
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const webmap = new WebMap({
        portalItem: {
          id: "aa1d3f80270146208328cf66d022e09c"
        }
      });

      const view = new MapView({
        container: mapDiv.current,
        map: webmap
      });
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{width: "200px"}}>
          <CalciteValueList drag-enabled>
            <CalciteValueListItem label="Dogs" value="dogs"></CalciteValueListItem>
            <CalciteValueListItem label="Cats" value="cats"></CalciteValueListItem>
          </CalciteValueList>
        </div>
        <p>Hello Vite + React!</p>
        <CalciteButton onClick={() => setCount((count) => count + 1)}>count is: {count}</CalciteButton>
      </header>
      <div className="mapDiv" ref={mapDiv}></div>
    </div>
  )
}

export default App
