import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/NavBar'
import Calculator from './component/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id = "homeMain">
        <Calculator/>
        <NavBar currentPage = "Home"/>
      </div>
    </>
  )
}

export default App
