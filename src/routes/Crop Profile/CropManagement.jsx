import React from 'react'
import Navbar from '../../components/Reusable components/Navbar'
import circle from '../../assets/tick-circle.png'
import mildew from '../../assets/crop_mgt/mildew.png'
import blight from '../../assets/crop_mgt/blight.png'
import rust from '../../assets/crop_mgt/rust.png'
import stalk_rot from '../../assets/crop_mgt/stalk_rot.png'
import blight_disease from '../../assets/crop_mgt/blight_disease.png'
import army_worm from '../../assets/crop_mgt/army_worm.png'
import stem_borer from '../../assets/crop_mgt/stem_borer.png'
import pink_borer from '../../assets/crop_mgt/pink_borer.png'
import termites from '../../assets/crop_mgt/termites.png'
import CProfile from '../../components/Reusable components/CProfile'


const CropManagement = () => {
  return (
    // parent container
    <div className='flex'>
        {/* left container */}
        <CProfile/>
        {/* right container */}
        <div className='mt-10 flex w-full flex-col'>
            {/* Navbar container */}
            <Navbar/>

            
            {/* Parent container */}
            <div className='flex flex-col space-y-12 m-10 w-3/5'>
                {/* header container */}
                <div>
                    <h1 className='mb-4 text-[#313131] text-3xl font-semibold'>Pest And Disease Management</h1>
                    <p className='text-[#565656]'>Below are some of the diseases and pests that can affect maize and how to control them:
                    </p>
                </div>
                {/* image 1 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-6 flex pb-4'>
                        <img src={circle} alt='circle' width={30}/>
                        <p className='text-[#313131] font-bold text-2xl'>Downy Mildew</p>
                    </div>
                    <img src={mildew} alt='flint'/>
                    <div>
                        <p className='text-[#565656] pt-6'>Downy mildew can affect maize crop in Nigeria. This is an oomycetes infection that changes the color of the leaves of the maize plant
                         to yellow and brown. It negatively impacts the photosynthetic process in the plant and ultimately leads to low yield. To prevent this disease, maize seeds should be coated with Metalaxyl.
                         Foliar fungicides like Mancozeb and copper oxide can be used.
                        </p>
                    </div>

                </div>
                {/* image 2 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-6 flex pb-4'>
                        <img src={circle} alt='circle' width={30}/>
                        <p className='text-[#313131] font-bold text-2xl'>Leaf Blight</p>
                    </div>
                    <img src={blight} alt='flint'/>
                    <div>
                        <p className='text-[#565656] pt-6'>This is a fungal disease that can affect maize plants in Nigeria. Fungicides like mancozeb or any copper fungicides can be used as preventive or curative methods for the disease.
                        </p>
                    </div>

                </div>
                {/* image 3 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-6 flex pb-4'>
                        <img src={circle} alt='circle' width={30}/>
                        <p className='text-[#313131] font-bold text-2xl'>Maize Rust Disease</p>
                    </div>
                    <img src={rust} alt='flint'/>
                    <div>
                        <p className='text-[#565656] pt-6'>Rust is also a fungal disease that can affect maize crop in Nigeria. The foliar application of Diathane or any good fungicides can prevent or cure this disease.
                        </p>
                    </div>

                </div>

                {/* image 4 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-6 flex pb-4'>
                        <img src={circle} alt='circle' width={30}/>
                        <p className='text-[#313131] font-bold text-2xl'>Stalk Rot</p>
                    </div>
                    <img src={stalk_rot} alt='flint'/>
                    <div>
                        <p className='text-[#565656] pt-6'>Stalk rot is a fungal disease that causes the rottening of the stalk of maize plants. Trichoderma biofungicides or chemical fungicides can be used to control this disease. An increase in potassium fertilizer can also reduce the incidences of this disease.</p>
                    </div>

                </div>

                {/* image 5 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-6 flex pb-4'>
                        <img src={circle} alt='circle' width={30}/>
                        <p className='text-[#313131] font-bold text-2xl'>Blight Disease</p>
                    </div>
                    <img src={blight_disease} alt='flint'/>
                    <div>
                        <p className='text-[#565656] pt-6'>Blight is caused by Rhizoctonia sp. Pseudomonas fluorescens culture or the application of inorganic fungicides can control this disease.</p>
                    </div>

                </div>

                {/* image 6 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-6 flex pb-4'>
                        <img src={circle} alt='circle' width={30}/>
                        <p className='text-[#313131] font-bold text-2xl'>Army Worm</p>
                    </div>
                    <img src={army_worm} alt='flint'/>
                    <div>
                        <p className='text-[#565656] pt-6'>Arguably, the most dangerous insect that can destroy a maize farm within a twinkle of an eye, army worm can be controlled by using Tihan, Thunder, Ampligo and other selected insecticides in Nigeria. It is better to prevent army worm than trying to eradicate them after infestation.</p>
                    </div>

                </div>

                {/* image 7 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-6 flex pb-4'>
                        <img src={circle} alt='circle' width={30}/>
                        <p className='text-[#313131] font-bold text-2xl'>Stem Borer</p>
                    </div>
                    <img src={stem_borer} alt='flint'/>
                    <div>
                        <p className='text-[#565656] pt-6'>This insect is common in maize fields in Nigeria. It can be controlled with the spraying of Cholopyriphos and the use of Carbofuran (wormforce).</p>
                    </div>

                </div>

                {/* image 8 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-6 flex pb-4'>
                        <img src={circle} alt='circle' width={30}/>
                        <p className='text-[#313131] font-bold text-2xl'>Pink Borer</p>
                    </div>
                    <img src={pink_borer} alt='flint'/>
                    <div>
                        <p className='text-[#565656] pt-6'>Just like stem borer, It can be controlled with the spraying of Cholopyriphos and the use of Carbofuran (wormforce).</p>
                    </div>

                </div>

                {/* image 9 container */}
                <div className='my-10 mx-2'>    
                    {/* tick container */}
                    <div className='space-x-6 flex pb-4'>
                        <img src={circle} alt='circle' width={30}/>
                        <p className='text-[#313131] font-bold text-2xl'>Termites</p>
                    </div>
                    <img src={termites} alt='flint'/>
                    <div>
                        <p className='text-[#565656] pt-6'>Termites can destroy a maize farm if they are not quickly controlled. The application of Fepronil granules can be used to control termites.</p>
                    </div>

                </div>
                
                 
            </div>
        </div>
    </div>
  )
}

export default CropManagement