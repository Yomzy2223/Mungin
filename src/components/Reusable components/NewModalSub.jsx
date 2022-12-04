import React from 'react'
import {IoChevronBackSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom'

const NewModalSub = () => {
    return (
        <div className='fixed bg-opacity-50 flex justify-center pb-32 h-full w-full'>
        {/* card container */}
        <div className='w-[500px] h-[600px] mb-32 bg-white rounded-xl p-6'>
    
            {/* back to crop profile button */}
            <Link to={'/crop_p'}>
                <button>
                    <div className='flex'>
                            <div className='mr-1'>
                                <IoChevronBackSharp size={15}/> 
                            </div>
                            <p className='text-[#5A5A5A] text-xs'>Back to crop profile</p>
                        </div>
                </button>
            </Link>
            
             {/* form cotainer */}
            <div className='m-2 flex flex-col space-y-3 mt-8'>
                {/* analyze crop yield */}
                <div className='text-left w-full space-y-2 border-b'>
                    <p className='text-[#313131] text-xl font-semibold pb-6'>Analyze Crop Yield</p>
                </div>
                {/* input button container */}
                <div className='space-y-6 pt-6'>
                    {/* soil texture container */}
                    <div className='space-y-2'>
                        <p className='text-[#313131] text-sm'>Soil Texture</p>
                        {/* <input  placeholder='Sandy Soil' type='text'/> */}
                        <div className='border w-full text-[#5A5A5A] py-3 text-xs pl-4 rounded-md'>
                            <p className='text-[#5A5A5A]'>Sandy Soil</p>
                        </div>
                        <p className='text-[#5A5A5A] text-xs'>Recommendation: (Loamy Soil) Apply organic fertilizer, plant cover crop like cowpea, practice mulching.</p>
                    </div>
    
    
                    {/* Rainfall container */}
                    <div className='space-y-2'>
                        <p className='text-[#313131] text-sm'>Rainfall</p>
                        {/* <input className='border w-full text-[#5A5A5A] py-3 text-xs pl-4 rounded-md' placeholder='300 mm/annum' type='text'/> */}
                        <div className='border w-full text-[#5A5A5A] py-3 text-xs pl-4 rounded-md'>
                            <p className='text-[#5A5A5A]'>300 mm/annum</p>
                        </div>
                        <p className='text-[#5A5A5A] text-xs'>Recommendation: (400mm/annum) You have a 100mm deficit. Practice irrigation, plant cover crops or mulching.</p>
                    </div>
    
    
                    {/* Soil PH container*/}
                    <div className='space-y-2'>
                        <p className='text-[#313131] text-sm'>Soil PH</p>
                        {/* <input className='border w-full text-[#5A5A5A] py-3 text-xs pl-4 rounded-md' placeholder='3.4' type='text'/> */}
                        <div className='border w-full text-[#5A5A5A] py-3 text-xs pl-4 rounded-md'>
                            <p className='text-[#5A5A5A]'>3.4</p>
                        </div>
                        <p className='text-[#5A5A5A] text-xs'>Recommendation: (4.5) Your soil acidity is high, apply potash and reduce inorganic fertilizer.</p>
                    </div>
    
                        
                </div>
                
    
            </div>
    
            
            
            
        </div> 
       </div>
        
      )
}

export default NewModalSub