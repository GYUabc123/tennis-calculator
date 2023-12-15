import { useState } from 'react'
import './App.css'
import NavBar from './component/NavBar'
import UserInput from './component/UserInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id = "homeMain">
        <UserInput />
        <NavBar currentPage = "Home"/>

      </div>
    </>
  )
}

export default App
