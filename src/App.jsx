import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <div className='vh-100' style={{background: "#fff"}}>
      <Outlet/>
    </div>
  )
}

export default App
