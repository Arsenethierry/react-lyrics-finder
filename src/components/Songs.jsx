import React, { useContext } from 'react';
import { Context } from '../Context';
import Spinner from './Spinner';
import Song from './Song';

function SongCard() {

    const [state] = useContext(Context);
    const { songs_list } = state;

    if (songs_list === undefined || songs_list.length === 0){
        return <Spinner />
    }else{
        return (
            <div className='grid sm:grid-cols-2 md:grid-cols-4 sm:gap-2 gap-4 mt-5'>
                {songs_list.map(song =>(
                    <Song key={song.track.track_id} track={song.track}/>
                ))}
            </div>
        );
    }
}

export default SongCard;