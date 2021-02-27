import React from 'react'
import Layout from './components/Layout.js'
import Weather from './components/Weather.js'
import Links from './components/Links.js'
import Todo from './components/Todo.js'
// import Quote from './components/Quote.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Links />
      <Weather />
      <Todo />
      <Layout />
    </div>
  );
}

export default App;
