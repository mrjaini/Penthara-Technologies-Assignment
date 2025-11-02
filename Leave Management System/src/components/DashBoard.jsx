import React from 'react'
import { NavLink } from 'react-router-dom'
function DashBoard() {
    return (
        <div className='bg-white w-full h-auto border-2 border-white rounded-2xl m-5'>
            <div className='h-15 rounded-t-2xl bg-gray-200 flex items-center border-b-2 border-gray-300 justify-between'>
                <div className='text-2xl font-bold ml-4 '>Dashboard</div>
            </div>
            <div className='h-screen overflow-hidden'>
                <div className=" h-1/2 bg-white text-black py-6 rounded-2xl shadow-lg px-16 mx-10 mt-5">
                    <h2 className="text-xl font-semibold my-3 border border-gray-600 pb-2 pl-3 align-middle bg-white rounded-lg shadow-sm shadow-black">Leave Balance</h2>
                    <div className='mt-15 left-0'>
                    <div className="flex justify-center items-center gap-x-22 py-2 font-bold">
                        <p>Earned Leave :</p>
                        <div class="w-80 bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div className="w-60 h-full bg-red-600"></div>
                        </div>
                        <p className="font-bold">8</p>
                    </div>
                    <div className="flex justify-center items-center gap-x-22 py-2 font-bold">
                        <p >Casual Leave :</p>
                        <div class="w-80 bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div className="w-15 h-full bg-green-400 "></div>
                        </div>
                        <p className="font-bold">2</p>
                    </div>
                    <div className=" flex justify-center items-center gap-x-22 py-2 font-bold">

                        <p className="pr-4">Sick Leave :  </p>
                        <div class="w-80 bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div className="w-40 h-full bg-orange-400 "></div>
                        </div>
                        <p className="font-bold">5</p>
                    </div>
                    </div>
                </div>

                <div className='h-1/3 flex justify-between bg-gray-200 m-10 rounded-2xl shadow-lg'>
                    <div className='flex bg-white flex-1  rounded-2xl m-3 shadow-xl items-stretch'>
                        <div className='flex-1'>
                        <h1 className=' font-bold text-2xl m-5'>Leave Form</h1>
                        <p className='font-semibold text-blue-500 pl-5'>Click on the Form button for applying the leave</p>
                        </div >
                        <div className='flex-1'>
                            <h1 className='text-center mt-20 font-semibold'>Apply Here</h1>
                        <button className='ml-25 mt-2 bg-blue-600 text-white py-2 px-6 text-xl font-bold rounded-lg hover:border-2 hover:border-black hover:font-bold shadow-xl shadow-blue-600'>
                            <NavLink to="/leave-form">Form</NavLink>

                        </button>
                        </div>
                    </div>
                    <div className='flex bg-white flex-1  rounded-2xl m-3 shadow-xl items-stretch'>
                        <div className='flex-1'>
                        <h1 className=' font-bold text-2xl m-5'>Leave History</h1>
                        <p className='font-semibold text-blue-500 pl-5'>Click on the view button to see leave history</p>
                        </div >
                        <div className='flex-1'>
                            <h1 className='text-center mt-20 font-semibold'>Tap to View</h1>
                        <button className='ml-25 mt-2 bg-blue-600 text-white py-2 px-6 text-xl font-bold rounded-lg hover:border-2 hover:border-black hover:font-bold shadow-xl shadow-blue-600'><NavLink to="/leave-history">View</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
