import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useGetLeadsQuery } from './services/leadsApi';
import Navbar from './Leads/Navbar';

function Dashboard() {
    // var {isLoading,data} = useGetLeadsQuery();
    // console.log(isLoading,data)
    // var navigate = useNavigate();
    // function logout(){
    //     window.localStorage.clear();
    //     navigate('/')
    // }
  return (
    <div>
      <Navbar/>
      <h2>Dashboard</h2><br />
      <Outlet/>
    </div>
  )
}

export default Dashboard
