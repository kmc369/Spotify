import React, { useEffect, useState } from "react";
import AudioPlayer from 'react-h5-audio-player';


const AudioComponent = ({element,index,songs})=>{
const [selectSong, setSelectedSong] = useState({ element, index });


    console.log(element, "RPOP1" , "prop2",index , "prop3", songs )



    return(
        <>
             {selectSong &&
                                    <div className="audio-container">
                                        <img  src={songs[selectSong.index].albums.image}  height="70px" width="70px"/>
                                       <AudioPlayer 

                                       id='audio-button '
                                       src={songs[selectSong.index].audio_url}
                                       autoPlay={true}
                                       volume={0.3}
                                       showSkipControls={false}
                                       />
                                       </div>
                                    }

        
        </>
    )
}

export default AudioComponent
