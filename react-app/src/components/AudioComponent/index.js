import React, { useEffect, useState } from "react";
import AudioPlayer from 'react-h5-audio-player';


const AudioComponent = ({prop})=>{


    const add_obj = {

    }

  


    return(
        <>
        {prop ? (
          <div className="entire-audio-container">
            <div className="audio-container">
              <img src={prop.element.albums.image}
             height="70px" width="70px" />
              <AudioPlayer
                id='audio-button'
                src={prop.element.audio_url}
                autoPlay={true}
                volume={0.3}
                showSkipControls={false}
              />
            </div>
          </div>
        ) : (
          <div className="entire-audio-container">
            <div className="audio-container">
              <img src="https://images.squarespace-cdn.com/content/v1/6042529f1fe38f0b0503be5c/1616072527567-YHOUT1L2JW6ROBTME3SQ/spotify-playlist.jpeg" height="70px" width="70px" />
              <AudioPlayer
                id='audio-button'
                src="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Want+A+Break+From+The+ADs+-7OBacT66SCM-192k-1698588820.mp3"
                autoPlay={true}
                volume={0.3}
                showSkipControls={false}
              />
            </div>
          </div>
        )}
      </>
    )
}

export default AudioComponent
