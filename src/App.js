import React from 'react'
import Layout from './components/Layout.js'
import Weather from './components/Weather.js'
// import Quote from './components/Quote.js'
import './App.css';

function App() {
  return (
    <div className="App">
        <Weather />
        <Layout />
    </div>
  );
}

export default App;
