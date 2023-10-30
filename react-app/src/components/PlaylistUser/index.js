import React, { useEffect, useState } from "react";
import './playlist.css'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from '../Navigation/ProfileButton';
import AudioPlayer from 'react-h5-audio-player';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import  CreatePlayModal from '../../components/CreatePlayModal'
import OpenModalButton from "../OpenModalButton";
import CreatePlaylist from "../../components/CreatePlayModal";
import EditPlaylist from "../EditPlaylistModal";


const PlaylistUserList = ()=>{
    const [songs,setSongs] = useState([])
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()
    const [playing, setPlaying] = useState(false)
    const [hoverIndex, setHoverIndex] = useState(null)
    const [selectSong, setSelectedSong] =useState(null)
    const [playlist, setPlaylist]= useState("")

    const [randomImage, SetRandomImage]=useState(null)
    const {playlistId} = useParams()
    const playlist_id = Number(playlistId)

    console.log("the playlist here is", playlist)


    const handlePlaylistUpdate = (updatedPlaylist) => {
       
        setPlaylist(updatedPlaylist);
      };


    useEffect(()=>{
        async function FetchData(){
            const res = await fetch(`/api/playlist/songs/${playlist_id}`)
            const data = await res.json()
            const res2 = await fetch(`/api/playlist/${playlist_id}`)
            const data2 = await res2.json()

         
            setPlaylist(data2)
        
            console.log("the playlist here is", playlist, "sur")
           const arr = []
            if(data.length>=1){
                setSongs(data)

            }       
        }

       

        FetchData()
   
    },[])

    
    function playSong(){
        setPlaying(true)

    }


   

    if(songs.length===0 || !sessionUser ){
        
        return null
    }
    return(<>
        <div className="entire-user-container">
            <div className="user-container">
    
                <div className="user-sidebar-container">
                        <div className="nav-items-container">
                            <div><i class="fa-solid fa-house" style={{color:"lightgray", fontSize:"20px",cursor: "pointer"}} onClick={()=>history.push('/')}></i><span onClick={()=>history.push('/')} className="nav-words-user">Home</span></div>
                            <div><i class="fa-solid fa-magnifying-glass" style={{color:"lightgray",fontSize:"20px"}}></i><span className="nav-words-user">Search</span></div>
    
                        </div>
                        <div className="library-items-container">
                            <div className="library-item"><i className="fa-regular fa-bookmark" style={{color:"lightgray", fontSize:"20px", marginLeft:"5px"}}></i><span  className="nav-words-user">Library</span></div>
                            <div className="library-button-container">
                            <OpenModalButton className="song-button-user" modalComponent={<EditPlaylist playlist={playlist} onUpdate={handlePlaylistUpdate} />} buttonText="Edit"/>
                                {/* <div><button className="song-button-user">Edit</button></div> */}
                                <div><button className="song-button-user">Podcast</button></div>
                            </div>
                           
                        </div>
                        <div className="playlist-container">
                                    if you want to add something later
                            </div>
    
                            
    
                       
    
                </div>
                
    
    
    
                <div className="user-main-content-container3">
                    <div className="user-landing-container">
                            <div className="user-profile-icon3">
                                <button className="premiumButton">Premium Options</button>
                                <ProfileButton user={sessionUser} />
                            </div>
                        <div className="user-landing-image3">
                            <div className="user-landing-image-item">
                           
                                 
                                      <div><img src={playlist.image} style={{borderRadius:"5px"}} height="400px" width="400px"/></div>

                                
                            </div>
                            <div className="song-starred-info">
                                <div className="song-word"><u>Songs</u></div>
                                <div ><h2 className="your-songs">{playlist.name}</h2></div>
                                <div className="user-info">
                                    <div className="user-info-items">{playlist.description}  </div>
                                    <div className="user-info-items"><span style={{marginRight:"5px"}}></span>{songs.length} songs</div>
                                   
                                </div>
    
                            </div>
    
                        </div>
    
                        <div className="seperator">
                            <button className="play-button"><i class="fa-solid fa-play" onClick={playSong}></i></button>
                        
                            
                        </div>
    
    
                    </div>
                    <table className="user-main-table" >
                        <thead >
                        <tr className="table-header-container">
                            <th style={{ textAlign: 'left' }}><i class="fa-solid fa-hashtag"></i></th>
                            <th style={{ textAlign: 'left' }}>Title</th>
                            <th style={{ textAlign: 'left' }}>Album</th>
                            <th style={{ textAlign: 'left' }}>Genre</th>
                            <th style={{ textAlign: 'left' }}>Time</th>
                        </tr>
                        </thead>
                        <tbody>
                            {songs.map((element, index) => (
                       
                            <tr key={index}>
                                <td>
    
    
                                    <div className="hash-item" 
                                        onMouseEnter={()=>setHoverIndex(index)}
                                        onMouseLeave={()=>setHoverIndex(null)}
                                        >
                                        {hoverIndex !==index? (
                                        <div>{index+1}</div>
                                        ):(
                                        <div> <i class="fa-solid fa-play"  onClick={()=>setSelectedSong({element,index})} ></i> 
                                     
                                        </div>
                                        )}
                                        </div>
                                
                                </td>
                                <td className="column1-container">
                                            <img src={element.albums.image} height="50px" width="50px" style={{marginRight:"10px"}}/>
                                            <div className="title-artist-name-container">
                                                <div>{element.name} </div>
                                                <div>{element.artist.name} </div>
                                            </div>
                                </td>
    
                                 <td className="column2-container">
                               
                                    <div className="album-name-item">{element.albums.name}</div>
    
                                   
                                 </td>
    
    
                                 <td className="column3-container">
                                    <div className="genre-type-item">{element.type} </div>
                                </td> 
    
                                <td className="column4-container">
                                <div className="time-item">{element.time} </div>
                                </td> 
                            </tr>
                            ))}
                        </tbody>
    
    
                    </table>
                  </div>
                 
               
    
                </div>
    
           
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
    
        </div>
        </>
    )
}

export default PlaylistUserList