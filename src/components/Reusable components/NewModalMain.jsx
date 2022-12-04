import React from 'react'
import { useState } from 'react'
import NewModalSub from './NewModalSub'
import {IoChevronBackSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom'

const NewModalMain = () => {
    const [newModalMain, setnewModalMain] = useState(false)
    return (        
        <div className='fixed bg-opacity-50 bg-[#C8C8C8] flex justify-center pt-32 h-full w-full'>
             {newModalMain && <NewModalSub/>}
             {/* create new state called newModalMain that will display newModalSub component */}


         {/* card container */}
         <div className={newModalMain && `hidden`}>
             {/* To hide newModalMain card when displaying newSubModal; 
                 when newModalMain state is true, you'll set classname of card component to hidden */}
             <div className='w-[500px] h-[500px] bg-white rounded-xl p-6'>

                
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
                     <p className='text-[#313131] text-xl font-semibold'>Analyze crop yield</p>
                     <p className='pb-6 text-[#5A5A5A] text-sm'>Input your crop information in the fields provided below to calculate a
                         possible yield
                     </p>
                 </div>
                 {/* input button container */}
                 <div className='space-y-6'>
                     {/* soil texture container */}
                     <div>
                         <p className='text-[#313131] text-sm'>Soil Texture</p>
                         <input className='border w-full text-[#5A5A5A] py-3 text-xs pl-4 rounded-md' placeholder='Sandy Soil' type='text'/>
                     </div>
                     {/* Rainfall container */}
                     <div>
                         <p className='text-[#313131] text-sm'>Rainfall</p>
                         <input className='border w-full text-[#5A5A5A] py-3 text-xs pl-4 rounded-md' placeholder='300 mm/annum' type='text'/>
                     </div>
     
                         {/* button container */}
                     <div className='pt-5'>
                         <button onClick={()=> setnewModalMain(true)} className='bg-[#17233C] w-full flex justify-center text-center text-white py-3 px-4 rounded-sm'>Analyze Crop Yield</button>
                     </div>
                 </div>
                 
     
             </div>
     
             
             
             
         </div></div>
         
         
         
        
        </div>
             
       )
}

export default NewModalMain