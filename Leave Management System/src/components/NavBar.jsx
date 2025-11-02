import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Home from './Home'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <div>

                {/* This is conditional Rendring of NavBar */}
                <NavLink to='/'>{({ isActive }) => isActive ?  // true condition
                    <div className='relative bg-black w-60 h-screen flex flex-col items-center justify-evenly'>
                        <div className='absolute left-5 top-8 text-white text-2xl font-bold '>
                            <h1>
                                <NavLink to="/">
                                    Leave Management System
                                </NavLink>
                            </h1>
                        </div>

                        {/* NavLink is used to change  url and showing component */}
                        <div className='absolute text-xl w-full items-center ml-30'>

                            <div className=' text-gray-400'>
                                <NavLink to="/dashboard"
                                    className={({ isActive }) => (isActive ? "text-white font-bold py-1 pl-2" : "text-gray-400")}>
                                    DashBoard
                                </NavLink>
                            </div>

                            <div className=' text-gray-400 py-1'>
                                <NavLink to="/leave-form"
                                    className={({ isActive }) => (isActive ? "text-white font-bold py-1 pl-2" : "text-gray-400")}>
                                    Leave Form
                                </NavLink>
                            </div>

                            <div className=' text-gray-400 py-1'>
                                <NavLink to="/leave-history"
                                    className={({ isActive }) => (isActive ? "text-white font-bold py-1 pl-2" : "text-gray-400")}>
                                    Leave History
                                </NavLink>
                            </div>

                        </div>

                        <div className='absolute bottom-10 flex flex-col gap-y-3 text-xl font-bold'>
                            <button className=' py-2 px-4 shadow shadow-white rounded-xl border-gray-400 text-gray-300 hover:text-black hover:bg-white'>
                                <NavLink to="/login">
                                    Login
                                </NavLink>
                            </button>
                            <button className=' py-2 px-3 shadow rounded-xl shadow-white border-gray-400 text-gray-300 hover:text-black hover:bg-white'>
                                <NavLink to="/signup" >
                                    Signup
                                </NavLink></button>
                        </div>
                    </div>

                    :

                    //false condition
                    <div className='relative bg-black w-60 h-screen flex flex-col items-center justify-evenly'>

                        <div className='absolute left-5 top-8 text-white text-2xl font-bold '><h1><NavLink to="/">
                            Leave Management System
                        </NavLink></h1>
                        </div>

                        <div className='absolute text-xl w-full items-center ml-30 '>

                            <div className=' text-gray-400'>
                                <NavLink to="/dashboard"
                                    className={({ isActive }) => (isActive ? "text-white font-bold py-1 pl-2" : "text-gray-400")}>
                                    DashBoard
                                </NavLink>
                            </div>

                            <div className=' text-gray-400 py-1'>
                                <NavLink to="/leave-form"
                                    className={({ isActive }) => (isActive ? "text-white font-bold py-1 pl-2" : "text-gray-400")}>
                                    Leave Form
                                </NavLink>
                            </div>

                            <div className=' text-gray-400 py-1'>
                                <NavLink to="/leave-history"
                                    className={({ isActive }) => (isActive ? "text-white font-bold py-1 pl-2" : "text-gray-400")}>
                                    Leave History
                                </NavLink>
                            </div>

                        </div>

                        <div className=' absolute bottom-10 text-2xl py-2 px-4 rounded-xl text-white hover:text-white hover:font-bold'>
                            <NavLink to="/">
                                Profile
                            </NavLink>
                        </div>
                    </div>
                }
                </NavLink>
            </div>
        </>
    )
}

export default NavBar
