import React from 'react';
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import * as test from 'lc-react-components';
function App() {
  console.log(test);
  return (
    <div className="App">
      <test.Button></test.Button>
    </div>
  );
}

export default App;
