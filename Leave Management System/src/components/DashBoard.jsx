import { useState } from 'react'
import React from 'react'
import { NavLink } from 'react-router-dom'
function DashBoard() {
    const [leaveData, setLeaveData] = useState([
        { type: "Earned Leave", color: "bg-red-600", used: 5, total: 10 },
        { type: "Casual Leave", color: "bg-green-400", used: 2, total: 10 },
        { type: "Sick Leave", color: "bg-orange-400", used: 1, total: 10 },
    ])
    return (

        // This is dashboard component
        <div className='bg-white w-full h-auto border-2 border-white rounded-2xl m-5'>

            {/* This Dashboard's heading  */}
            <div className='h-15 rounded-t-2xl bg-gray-200 flex items-center border-b-2 border-gray-300 justify-between'>
                <div className='text-2xl font-bold mx-auto '>Dashboard</div>
            </div>

            {/* This is other component section */}
            <div className='h-screen overflow-hidden'>

                {/* This is leave balance component to show leave */}
                <div className=" h-1/2 bg-white text-black py-6 rounded-2xl shadow-lg px-16 mx-10 mt-5">
                    <h2 className="text-xl font-semibold my-3 border border-gray-600 pb-2 pl-3 align-middle bg-white rounded-lg shadow-sm shadow-black">Leave Balance</h2>

                    {/* this is for leave type  */}
                    <div className='mt-15 left-0'>
                        {leaveData.map((leave, index) => {

                            // this is for calculate width percentage 
                            const widthPercent = (leave.used / leave.total) * 100
                            return (
                                <div key={index} className="flex justify-center items-center gap-x-22 py-2 font-bold">
                                    <p className="pr-4">{leave.type} :</p>
                                    <div className="w-80 bg-gray-200 rounded-full h-3 overflow-hidden">
                                        <div className={`${leave.color} h-full`} style={{ width: `${widthPercent}%` }}></div>
                                    </div>
                                    <p className="font-bold">{leave.used}</p>
                                </div>
                            )

                        })}
                    </div>
                </div>

                {/* This is leave form and leave history component */}
                <div className='h-1/3 flex justify-between bg-gray-200 m-10 rounded-2xl shadow-lg'>

                {/* This is leave form component */}
                    <div className='flex bg-white flex-1  rounded-2xl m-3 shadow-xl items-stretch'>
                        <div className='flex-1'>
                            <h1 className=' font-bold text-2xl m-5'>Leave Form</h1>
                            <p className='font-semibold text-blue-500 pl-5'>Click on the Form button for applying the leave</p>
                        </div >
                        <div className='flex-1'>
                            <h1 className='text-center mt-20 font-semibold'>Apply Here</h1>
                            <button className='ml-25 mt-2 bg-blue-600 text-white py-2 px-6 text-xl font-bold rounded-lg hover:border-2 hover:border-black hover:font-bold '>
                                <NavLink to="/leave-form">Form</NavLink>

                            </button>
                        </div>
                    </div>

                    {/* This is leave history component */}
                    <div className='flex bg-white flex-1  rounded-2xl m-3 shadow-xl items-stretch'>
                        <div className='flex-1'>
                            <h1 className=' font-bold text-2xl m-5'>Leave History</h1>
                            <p className='font-semibold text-blue-500 pl-5'>Click on the view button to see leave history</p>
                        </div >
                        <div className='flex-1'>
                            <h1 className='text-center mt-20 font-semibold'>Tap to View</h1>
                            <button className='ml-25 mt-2 bg-blue-600 text-white py-2 px-6 text-xl font-bold rounded-lg hover:border-2 hover:border-black hover:font-bold '><NavLink to="/leave-history">View</NavLink></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashBoard
