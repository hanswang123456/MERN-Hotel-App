import { useContext } from "react"
import {Link} from "react-router-dom"
import { AuthContext, RegContext } from "../../context/AuthContext"
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHippo } from "@fortawesome/free-solid-svg-icons"

const Navbar = ()=>{
    const {user} = useContext(AuthContext)

    return(<div className="navbar">
        <div className="navContainer">
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}><span className="logo">Hans' Hotel Booking<FontAwesomeIcon icon={faHippo} /></span></Link>
            {user? <div>Hi there, {user.details.username} <button className="navButton" onClick={()=>{localStorage.removeItem("user"); window.location = "/"}}>Logout</button> </div>: (<div className="navItems">
                <button className="navButton"  onClick={()=>{window.location = "/register"}}>Register</button>
                <button className="navButton" onClick={()=>{window.location = "/login"}}>Login</button>
            </div>)}
            </div>
            </div>) 
}

export default Navbar