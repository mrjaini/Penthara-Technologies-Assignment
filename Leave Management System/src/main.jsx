import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import DashBoard from './components/DashBoard.jsx'
import LeaveForm from './components/LeaveForm.jsx'
import LeaveHistory from './components/LeaveHistory.jsx'
import LoginPage from './components/LoginPage.jsx'
import Signup from './components/SignUp.jsx'
import Home from './components/Home.jsx'
import NavBar from './components/NavBar.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path :"",
        element:<Home/>
      },
      {
        path : '/dashBoard',
        element : <DashBoard/>
    },
    {
        path : '/leave-history',
        element : <LeaveHistory/>
    },
    {
        path : '/leave-form',
        element : <LeaveForm/>
    },
    {
        path : '/login',
        element : <LoginPage/>
    },
    {
        path : '/signup',
        element : <Signup/>
    },
  ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
