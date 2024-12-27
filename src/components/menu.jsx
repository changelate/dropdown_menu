import React, {useState} from "react"
import "./main.css"
function Menu(){
    const[isOpen, setOpen] = useState(false)
    return(
        <div class="container">
        <div data-id="wrapper" className= {`dropdown-wrapper ${isOpen?"open":""}`}>
      <button data-id="toggle" class="btn" onClick={() => setOpen(!isOpen)}>
        <span>Account Settings</span>
        <i class="material-icons">public</i>
      </button>
      <ul data-id="dropdown" class="dropdown">
        <li class="active"><a href="">Profile Information</a></li>
        <li><a href="">Change Password</a></li>
        <li><a href="">Become PRO</a></li>
        <li><a href="">Help</a></li>
        <li><a href="">Log Out</a></li>
      </ul>
    </div>
  </div>
    )
}

export default Menu;