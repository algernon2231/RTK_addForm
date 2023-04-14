import React from 'react'

const Plan = () => {

    return (
        <div className='max-w-[1400px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh] gap-1 '>
                <img className=' row-span-3 object-cover h-full w-full' src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80" alt="" />
                <img className=' row-span-2 object-cover h-full w-full' src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
                <img className=' row-span-2 object-cover h-full w-full' src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" alt="" />
                <img className=' row-span-3 object-cover h-full w-full' src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                <img className=' row-span-2  object-cover h-full w-full' src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80" alt="" />
            </div>
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
                <p className='text-2xl py-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, enim labore inventore porro, temporibus quibusdam distinctio exercitationem, voluptatum officia nesciunt dicta suscipit quod facilis quam reprehenderit deleniti doloribus vel repellat!
                </p>
                <p className='pb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui a vel, asperiores rerum nostrum recusandae quidem mollitia nam! Sed alias obcaecati laudantium eveniet delectus accusantium ipsam quaerat aspernatur veritatis?
                    Necessitatibus hic delectus corrupti porro enim id commodi et mollitia officiis? Iusto saepe est consectetur ipsam tenetur quia, et minima veritatis earum autem aliquam quod, culpa magnam provident aut? Error.
                </p>
                <div>
                    <button className='border-black mr-4 hover:shadow-xl px-4 py-2'>Learn More</button>
                    <button className='bg-black text-white border border-black hover:shadow-xl px-4 py-2 rounded-lg'>Book Your Trip</button>
                </div>
            </div>
        </div>
    )
}

export default Plan