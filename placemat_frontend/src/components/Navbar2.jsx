import React from 'react';
import { Code2 } from 'lucide-react';

const Navbar2 = () => {
  return (
    <>
    <nav className=' max-w-full bg-white flex items-center justify-between py-4 px-6'>
         <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PlaceMate
              </span></div>
              
        <button onClick={''} className='w-10 h-10 bg-amber-50 bg-linear-to-r from-blue-600 to-purple-600 my-1 mx-3 rounded-full'>
            <div className='text-white cursor-pointer'> AB </div>
            </button>        

        
        </nav>    
    </>
  )
}

export default Navbar2