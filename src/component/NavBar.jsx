import React from 'react'
import "./NavBar.css"
function NavBar(props) {
    console.log(props.currentPage)
  return (
    <div id = "navBar"> //home
        <div id = "navBarHeader">Tennis when</div>
        <ul id = "navBarRightItems">
            <li className = {props.currentPage == "Home" ? "navBarCurrentPage":"navBarListItem"}><a>Home</a></li>
            <li className = "navBarListItem"><a>Login</a></li>
        </ul>
    </div>
  )
}

export default NavBar