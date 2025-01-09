import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <div className='p-3 vh-100' style={{background: 'linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)'}}>
      <Outlet/>
    </div>
  )
}

export default App
