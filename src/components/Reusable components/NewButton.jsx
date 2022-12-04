import React from 'react'

const NewButton = ({openModal}) => {
    return (
        <button onClick={()=>{openModal(true)}}>
          <div className='bg-[#17233C]  text-white py-3 px-4 rounded-md '>
            <p>Analyze Crop Yield</p>
          </div>
        </button>
        
    
        
      )
}

export default NewButton