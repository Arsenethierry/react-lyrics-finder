import React from 'react';

function SongCard() {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-4 sm:gap-2 gap-4 mt-5'>
            <a href='#' className='flex flex- h-40 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700' >
                <img className='object-cover w-full h-full rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg' src='https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg?auto=compress&cs=tinysrgb&w=600' alt='music' />
                <div >
                    <h5 className='px-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Akon.</h5>
                    <p className='px-2 mb-3 font-normal text-gray-700 dark:text-gray-400'>The album name of the song</p>
                </div>
            </a>
            <a href='#' className='flex flex- h-40 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700' >
                <img className='object-cover w-full h-full rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg' src='https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg?auto=compress&cs=tinysrgb&w=600' alt='music' />
                <div >
                    <h5 className='px-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Akon.</h5>
                    <p className='px-2 mb-3 font-normal text-gray-700 dark:text-gray-400'>The album name of the song</p>
                </div>
            </a>
            <a href='#' className='flex flex- h-40 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700' >
                <img className='object-cover w-full h-full rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg' src='https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg?auto=compress&cs=tinysrgb&w=600' alt='music' />
                <div >
                    <h5 className='px-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Akon.</h5>
                    <p className='px-2 mb-3 font-normal text-gray-700 dark:text-gray-400'>The album name of the song</p>
                </div>
            </a>
            <a href='#' className='flex flex- h-40 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700' >
                <img className='object-cover w-full h-full rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg' src='https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg?auto=compress&cs=tinysrgb&w=600' alt='music' />
                <div >
                    <h5 className='px-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Akon.</h5>
                    <p className='px-2 mb-3 font-normal text-gray-700 dark:text-gray-400'>The album name of the song</p>
                </div>
            </a>
        </div>
    );
}

export default SongCard;