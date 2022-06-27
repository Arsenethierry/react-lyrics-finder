import React from 'react';
import SongCard from '../components/SongCard';

function Home(props) {
    return (
        <div className='container mx-auto'>
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
        </div>
    );
}

export default Home;