import React from 'react'
import Navbar2 from '../components/Navbar2'

function DashBord() {
  return (
    <>
    <Navbar2/>
        <div className='w-max flex '>
            <div className='w-75 h-screen bg-gray-100 '>
                <button onClick={''} className='bg-gray-100 h-11 w-full my-1 rounded-2xl hover:bg-gray-200 '>
                    <span className=' text-gray-600 text-lg'>
                        DashBord
                    </span>
                </button>
                <button className='bg-gray-100 h-11 w-full my-1 rounded-2xl hover:bg-gray-200'>
                    <span className=' text-gray-600 text-lg'>
                        Test
                    </span>
                </button>
                <button className='bg-gray-100 h-11 w-full my-1 rounded-2xl hover:bg-gray-200'>
                    <span className=' text-gray-600 text-lg'>
                        Practice
                    </span>
                </button>
                <button className='bg-gray-100 h-11 w-full my-1 rounded-2xl hover:bg-gray-200'>
                    <span className=' text-gray-600 text-lg'>
                        Profile
                    </span>
                </button>

            </div>
        </div>
    </>
  )
}

export default DashBord