import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import DashBoard from './components/DashBoard'
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import LeaveForm from './components/LeaveForm'
import LeaveHistory from './components/LeaveHistory'
import Home from './components/Home'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='flex'>
    <NavBar/>
    <Outlet/>
    </div>
  )
}

export default App
