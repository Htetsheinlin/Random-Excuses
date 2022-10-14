import React from 'react'
import {AiFillGithub} from "react-icons/ai"

const Footer = () => {
  return (
    <div className='bg-blue-500 flex p-5 justify-between'>
      <div className='text-white p-2'>Random Excuses webpage is created by using the Excuser API which is created by Kaustubh Dwivedi and Tanmay Misra </div>
      <a href="https://github.com/Htetsheinlin" target="_blank" >
      <AiFillGithub className='text-white text-3xl'/>
      </a>
      
    </div>
    
  )
}

export default Footer