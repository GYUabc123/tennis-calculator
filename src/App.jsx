import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlackSquare from './component/BlackSquare'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BlackSquare/>
      </div>
      
      

    </>
  )
}

export default App
