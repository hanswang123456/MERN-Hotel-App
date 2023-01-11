import { useContext } from "react"
import {AuthContext} from "../../context/AuthContext"
import { useState } from "react"
import  "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = ()=>{
    const [credentials, setCredentials] = useState({
    email:undefined,
    username:undefined,
    password:undefined,
    })

    const {loading, error, dispatch} = useContext(AuthContext)

    const navigate  = useNavigate()

    const handleChange = (e)=>{
setCredentials(prev=>({...prev,[e.target.id]: e.target.value }))
    }

    const handleClick = async e =>{
        e.preventDefault();
        dispatch({type:"REGISTER_START"})
        try{
            const res = await axios.post("/auth/register", credentials)
            dispatch({type:"REGISTER_SUCCESS", payload:res.data})
            alert("Registered!")
            navigate("/login")
        }catch(err){
            alert(err.response.data.message)
            dispatch({type:"REGISTER_FAILURE", payload: err.response.data })
        }
    }
    console.log(error)
    return(
        
       <div className="register">
        
        <div className="lContainer">
        <button className="lButton" onClick={()=>{window.location="/"}}>Back Home</button>
        <span style={{textAlign:"center",color:"white",fontWeight:"bolder", fontSize:"50px"}}>Register</span>
        <input type="text" onChange={handleChange} className="lInput"  placeholder="email" id="email"/>
            <input type="text" onChange={handleChange} className="lInput"  placeholder="username" id="username"/>
            <input type="password" onChange={handleChange} className="lInput"  placeholder="password" id="password"/>
        <button disabled={loading} onClick = {handleClick} className="lButton">Register</button>
        <button className="lButton" onClick={()=>{window.location="/login"}}>Login</button>
        {error && <span>{error.message}</span>}
        </div>
       </div>
    )
}

export default Register