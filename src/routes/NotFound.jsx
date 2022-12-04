import React from 'react'
import Notfound from '../assets/not_found.png' 
import {Link} from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='flex justify-center container mx-auto'>
        <img src={Notfound} className='p-20' alt='not found'/>
        <div className='absolute top-[80%] text-white flex px-6 py-3 rounded-lg bg-[#17233C]'>
            <Link to={'/'}><button>Go Home</button></Link>
        </div>
    </div>
  )
}

export default NotFound

