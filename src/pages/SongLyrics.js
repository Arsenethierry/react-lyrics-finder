import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';


function SongLyrics(props) {
    const [lyrics, setLyrics] = useState({});
    const [track,setTrack] = useState({})
    let { id } = useParams();


    useEffect(()=>{
        axios.get(`https://fast-dawn-89938.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}
        &apikey=${process.env.REACT_APP_API_KEY}`)
        .then(res=>{
            let lyrics = res.data.message.body.lyrics;
            setLyrics({ lyrics });

            return axios.get(
              `https://fast-dawn-89938.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id
              }&apikey=${process.env.REACT_APP_API_KEY}`
            );
          })
          .then(res => {
            let track = res.data.message.body.track;
            setTrack({ track });
          })
          .catch(err => console.log(err))
    },[id]);

    if (
        lyrics === undefined ||
        Object.keys(lyrics).length === 0
      ) {
        return <Spinner />;
      }else{
        return (
          <div className='container w-78  bg-indigo-600 flex flex-cols m-auto p-10'>
            song: {track.track.track_name}
            <p>{lyrics.lyrics.lyrics_body}</p>
          </div>
      );
      }
}

export default SongLyrics;