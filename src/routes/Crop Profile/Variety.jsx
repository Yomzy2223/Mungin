import React from 'react'
import Navbar from '../../components/Reusable components/Navbar'
import circle from '../../assets/tick-circle.png'
import flint from '../../assets/flint.png'
import popcorn from '../../assets/popcorn.png'
import dent from '../../assets/dent.png'
import sweetcorn from '../../assets/sweetcorn.png'
import flour from '../../assets/flour.png'
import CProfile from '../../components/Reusable components/CProfile'


const Variety = () => {
  return (
    // parent container
    <div className='flex'>
        {/* left container */}
        <CProfile/>
        {/* right container */}
        <div className='mt-10 flex w-full flex-col'>
            {/* Navbar container */}
            <Navbar/>
            {/* button and header */}
            <div className='flex mx-10 justify-between border-b pb-8'>
                <h2 className='text-4xl font-semibold'>Variety</h2>
                {/* button container */}
                {/* <div className='bg-[#17233C] text-white py-3 px-4 rounded-md '>
                    <p>Analyze Crop Yield</p>
                </div> */}

            </div>
            {/* content container*/}
            <div className='m-6'>
                <p>The Varieties include:</p>
                {/* image 1 container */}
                <div className='my-6 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-4 flex pb-4'>
                        <img src={circle} alt='circle' width={25}/>
                        <p className='text-[#313131] font-semibold'>Flint</p>
                    </div>
                    <img src={flint} alt='flint'/>

                </div>
                {/* image 2 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-4 flex pb-4'>
                        <img src={circle} alt='circle' width={25}/>
                        <p className='text-[#313131] font-semibold'>Popcorn</p>
                    </div>
                    <img src={popcorn} alt='flint'/>

                </div>
                {/* image 3 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-4 flex pb-4'>
                        <img src={circle} alt='circle' width={25}/>
                        <p className='text-[#313131] font-semibold'>Dent</p>
                    </div>
                    <img src={dent} alt='flint'/>

                </div>
                {/* image 4 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-4 flex pb-4'>
                        <img src={circle} alt='circle' width={25}/>
                        <p className='text-[#313131] font-semibold'>Sweet</p>
                    </div>
                    <img src={sweetcorn} alt='flint'/>

                </div>
                {/* image 5 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-4 flex pb-4'>
                        <img src={circle} alt='circle' width={25}/>
                        <p className='text-[#313131] font-semibold'>Flour</p>
                    </div>
                    <img src={flour} alt='flint'/>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Variety