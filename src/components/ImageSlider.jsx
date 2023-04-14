import React, { useEffect, useState } from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slices = [
        {
            url: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80',
            title: 'Lobster',
        },
        {
            url: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Sushi',
        },
        {
            url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Pasta',
        },
        {
            url: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Salmon',
        },
    ]

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            nextSlide();
        }, [5000]);
        return () => clearTimeout(timeoutId);
    }, [currentIndex])


    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slices.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slices.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const gotoSlide = index => {

        setCurrentIndex(index)
    }
    return (
        <div className='max-w-[1440px] mx-auto h-[600px] w-full py-16 px-4 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{ backgroundImage: `url(${slices[currentIndex].url})` }} />

            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-3xl rounded-full p-2 bg-black/20 text-white cursor-pointer duration-500'>
                <BsChevronCompactLeft size={30} onClick={prevSlide} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-3xl rounded-full p-2 bg-black/20 text-white cursor-pointer duration-500'>
                <BsChevronCompactRight size={30} onClick={nextSlide} />
            </div>

            <div className='flex top-4 justify-center'>
                {slices.map((slide, index) => (
                    <div key={index} className='text-2xl cursor-pointer'>
                        <RxDotFilled size={30} onClick={() => gotoSlide(index)} className={currentIndex === index ? 'text-gray-400' : 'text-black'} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider