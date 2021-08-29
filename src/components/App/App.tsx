import React, { useState } from 'react'
import logo from '../../logo.svg'
import './App.css'
import Search from "../Search/Search";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Search />
    </div>
  )
}

export default App
