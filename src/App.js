import React from 'react';
import ConfiguredQrReader from "./components/ConfiguredQrReader";

function WorkerReload() {
  window.self.skipWaiting()
  window.location.reload()
}

function backendRequest() {
  fetch('http://localhost:3480/Handler1.ashx')
}

function App() {
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>v.7</div>
      <button onClick={WorkerReload} >Worker reload</button>
      <button onClick={backendRequest} >Backend request</button>
      <ConfiguredQrReader />
    </div>
  );
}

export default App;
