import React from 'react'
import {AiOutlineMessage} from "react-icons/ai"

const Navbar = () => {
  return (
    <div className='bg-blue-500 w-100 p-5 shadow-lg flex'>
      <AiOutlineMessage className='text-3xl text-white mr-2'/>
      <div className='font-bold text-white text-2xl'>Random Excuses</div>
    </div>
    
  )
}

export default Navbar