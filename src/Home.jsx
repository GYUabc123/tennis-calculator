import { useState } from 'react'
import './App.css'
import NavBar from './component/NavBar'
import UserInput from './component/UserInput'
import TennisCourt from './component/TennisCourt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id = "homeMain">
        <UserInput />
        <NavBar currentPage = "Home"/>
        <TennisCourt />
      </div>
    </>
  )
}

export default App
