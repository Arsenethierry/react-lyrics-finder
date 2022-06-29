import React from 'react';
import { Link } from 'react-router-dom';

function Song({ track }) {
    return (
        <Link to={`lyrics/track/${track.track_id}`} className='flex flex- h-40 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700' >
            <div>
                <h5 className='px-2 mb-2 font-xl font-bold tracking-tight text-gray-900 dark:text-white'>{ track.artist_name }</h5>
                <p className='px-2 mb-3 font-normal text-gray-700 dark:text-gray-400'>{track.track_name}</p>
                <p className='px-2 mb-3 font-normal text-gray-700 dark:text-gray-400'>Album: {track.album_name}</p>
            </div>
        </Link>
    );
}

export default Song;