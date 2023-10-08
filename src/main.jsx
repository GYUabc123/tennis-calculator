import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Home.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './screen/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element = {<App/>}/>
      <Route path = "/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
