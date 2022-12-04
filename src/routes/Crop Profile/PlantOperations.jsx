import React from 'react'
import Navbar from '../../components/Reusable components/Navbar'
import CProfile from '../../components/Reusable components/CProfile'

const PlantOperations = () => {
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
                <h2 className='text-4xl font-semibold'>Plant Operations</h2>
                {/* button container */}
                {/* <div className='bg-[#17233C] text-white py-3 px-4 rounded-md '>
                    <p>Analyze Crop Yield</p>
                </div> */}

            </div>
            {/* content */}
            <div className='flex flex-col space-y-8 m-10 w-3/5'>
                {/* Preparin The Land */}
                <div>
                    <h1 className='mb-4 text-[#313131] text-3xl font-semibold'>Preparing The Land</h1>
                    <p className='text-[#565656]'>Land preparation is easier, cheaper and faster in the savanna belt of Nigerian than the
                    rain forest belt because the rain forest belt is too dense with a lot of trees and vegetation. Land preparation breaks up the texture of the 
                    soil and improves oxygen penetration into the soil, this helps the plants on the soil to grow well. Land preparation also improves the penetration 
                    of water into the soil and the efficacy of fertilizers applied on the soil. Animals and tractors can be used for ploughing, harrowing and ridging,
                    however, for large maize farms, the use of tractors is better and more efficient. They can also be used for planting of the maize seeds.
                    There are cheap planters in Nigeria that you can buy to facilitate the planting of maize seeds.
                    </p>
                </div>
                 
            </div>
        </div>
    </div>
  )
}

export default PlantOperations