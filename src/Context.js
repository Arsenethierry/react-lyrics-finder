import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const Context = createContext()

function ContextAPI({children}) {
    let intialState = {
        songs_list: []
    }
    const [state, setState] = useState(intialState);

    useEffect(()=>{
         axios.get(`https://fast-dawn-89938.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=8b2f79a8b5a6b7ddf1e99ddd424a6f05`)
            .then(res => {
                setState({
                    songs_list: res.data.message.body.track_list
                })
            })
            .catch(error=> console.log(error));
    },[])
    console.log(state)
    return (
        <Context.Provider value={[state,setState]}>{children}</Context.Provider>
    );
}

export default ContextAPI;