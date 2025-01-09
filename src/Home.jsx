import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    var navigate = useNavigate();
    useEffect(()=>{
      var token = localStorage.getItem('token');
      if(!token || token === 'undefined'){
        navigate('/login')
      }else{
        navigate('/dashboard')
      }
        // if(window.localStorage.getItem('token')){
        //     navigate('/dashboard')
        // }
        // else{
        //     navigate('/login')
        // }
    },[navigate])
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
