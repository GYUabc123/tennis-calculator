import React from 'react'
import NavBar from '../component/NavBar'
import './Login.css'
import { useState } from 'react'
export default function Login() {
  const [Username,setUserName] = useState("")
  const [Password,setPassword] = useState("")
  return (
    <div id = "loginMain">
        <div id = "loginFormDiv">
          <form>
          <h2 id = "loginFormHeader">LOGIN</h2>

          <div className = "loginFormField">
            <label>USERNAME</label>
            <input type="text" required/>
          </div>

          <div className = "loginFormField">
            <label>PASSWORD</label>
            <input type = "text" required/>
          </div>

          <div id = "loginFormSubmitButtonContainer">
            <input type = "submit"/>
          </div>
          </form>
        </div>
      <NavBar currentPage = "Login"/>
    </div>
  )
}
