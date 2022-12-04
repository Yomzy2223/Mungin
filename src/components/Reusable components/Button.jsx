import React from 'react'

const Button = ({openModal}) => {
  // receive setModal prop from crop profile as openModal
  return (
    <button onClick={()=>{openModal(true)}}>
      <div className='bg-[#17233C]  text-white py-3 px-4 rounded-md '>
        <p>Analyze Crop Yield</p>
      </div>
    </button>
    

    
  )
}

export default Button