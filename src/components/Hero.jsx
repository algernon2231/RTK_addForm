import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg" alt="" />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'></div>
            <div className='absolute top-0 left-0 text-white w-full h-screen flex flex-col justify-center'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4' >
                    <p>All Inclusive</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore unde quos reiciendis quibusdam necessitatibus, quo omnis. Iste, velit molestias. Quod, possimus minima! Provident delectus, aspernatur praesentium magni odit sint quas?
                    </p>
                    <button className='text-black rounded-full bg-white px-4 py-2 font-bold font-roboto'>Reverse Now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero