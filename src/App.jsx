import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlackSquare from './component/BlackSquare'
import NavBar from './component/NavBar'
import Calculator from './screen/calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Calculator/>
        <NavBar/>
        <BlackSquare/>
      </div>
    </>
  )
}

export default App
