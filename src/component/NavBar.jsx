import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
function NavBar(props) {
  return (
    <div id = "navBar">
        <div id = "navBarHeader">Tennis Now</div>
        <ul id = "navBarRightItems">

            <Link to="/" style={{ textDecoration: 'none'}}>
            <li className = {props.currentPage == "Home" ? "navBarCurrentPage":"navBarListItem"}><a>Home</a></li>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none'}}>
              <li className = {props.currentPage == "Login" ? "navBarCurrentPage":"navBarListItem"}>
                <a>Login</a></li>
            <li className = "navBarListItem"><a>Sign Up</a></li>
            </Link>

        </ul>
    </div>
  )
}

export default NavBar