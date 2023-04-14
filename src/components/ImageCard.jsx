import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
const ImageCard = ({ image, setTerm }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const tags = image.tags.split(',');
    const handleClickTag = tag => {
        setTerm(tag);
    }
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='max-w-sm rounded-xl overflow-hidden shadow-lg '>
            <img onClick={handleModalOpen} src={image.webformatURL} alt="" className='w-full object-cover h-[400px] hover:border hover:border-gray-200 transition duration-400 rounded-xl' />
            <div className='px-6 py-4'>
                <div className='font-bold text-purple-500 text-xl mb-2 flex justify-between'>
                    Photo by {image.user}
                    <span class="text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                    </span>
                </div>
                <ul>
                    <li>
                        <strong>Views : </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads :</strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes : </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className='px-6  py-4'>
                {tags.map((tag, index) => (
                    <span onClick={() => handleClickTag(tag)} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer' key={index} > #{tag}</span>
                ))}
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-60 flex items-center justify-center z-50"
                    onClick={handleModalClose}
                >
                    <div className="bg-white p-4 rounded-lg relative">
                        <img src={image?.largeImageURL} alt="" className="w-full h-ful object-cover" />
                        <div className='absolute top-4 left-2' >
                            <span className='w-14 h-14 rounded-full bg-black text-white px-4 py-2 font-bold' onClick={handleModalClose}>X</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ImageCard