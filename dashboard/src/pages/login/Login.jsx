import axios from 'axios';
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../config';
import { AuthContext } from '../../context/AuthContext'
import './login.scss'

const Login = () => {
    const [credentials,setCredentials] = useState({
        username : undefined,
        password : undefined,
    })
    const {loading, error, dispatch} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = (e)=>{
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    }
    const handleClick = async e =>{
        e.preventDefault()
        dispatch({type : "LOGIN_START"})
        try{
           const res = await axiosInstance.post('/auth/login',credentials)
           if(res.data.isAdmin){
            dispatch({type:"LOGIN_SUCCESS", payload : res.data.details})
            navigate('/')
           }else{
            dispatch({type:"LOGIN_FAILURE", payload : {message : "You are not allowed!"} })
           }
           
        }catch(err){
            dispatch({type:"LOGIN_FAILURE", payload : err.response.data})
        }
    }

  return (
    <>
    <div className="bg"></div>
    <div className="bg bg2"></div>
    <div className="bg bg3"></div>
    <div className="login">
      <div className="login_container">
      
        <div className="signIn">
          <h3>sign-in</h3>
          <input onChange={handleChange} id="username" type="text" className="username" placeholder="Username" />
          <input
          onChange={handleChange}
          id="password"
          type="password"
          className="password"
          placeholder="your password"
          />
          <button className='login__button' disabled={loading} onClick={handleClick}>Login</button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </div>
          </>
  )
}

export default Login