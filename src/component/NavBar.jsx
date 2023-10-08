import React from 'react'
import "./NavBar.css"
function NavBar(props) {
  return (
    <div id = "navBar">
        <div id = "navBarHeader">Tennis Now</div>
        <ul id = "navBarRightItems">
            <li className = {props.currentPage == "Home" ? "navBarCurrentPage":"navBarListItem"}><a>Home</a></li>
            <li className = "navBarListItem"><a>Login</a></li>
            <li className = "navBarListItem"><a>Sign Up</a></li>
        </ul>
    </div>
  )
}

export default NavBar