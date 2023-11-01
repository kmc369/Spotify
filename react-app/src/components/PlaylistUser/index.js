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
import DeletePlaylistModal from "../DeletePlaylistModal";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import AudioComponent from "../AudioComponent";
const PlaylistUserList = ({ onSelectedSongChange })=>{
    const dispatch = useDispatch();
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

    const handleLogout = async (e) => {
        e.preventDefault();
        await dispatch(logout());
        history.push('/')
      };
    

    const handleSelectedSongChange = async (element,index,songs) => {
        
        await setSelectedSong({element,index,songs})
        onSelectedSongChange({element,index,songs});
      };


    const handlePlaylistUpdate = (updatedPlaylist) => {
       
        setPlaylist(updatedPlaylist);
      };

    const handleDelete =(updatedPlaylist)=>{
        setPlaylist(updatedPlaylist);
        history.push('/user')
    }


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

    const DeleteSong = async (element) => {
        console.log("the playlist id is",element.playlist_id        )
       const res = await fetch(`/api/playlist/delete_song/${element.playlist_id}/${element.id}`,{
        method:"DELETE"
       })
       const songs = await res.json()
       console.log("the song is", songs)
       setSongs(songs)
      };

    
    function playSong(){
        setPlaying(true)

    }


   

    if( !sessionUser ){
        
        return null
    }
    return(<>
        <div className="entire-user-container">
            <div className="user-container">
    
                <div className="user-sidebar-container">
                        <div className="nav-items-container">
                            <div><i class="fa-solid fa-house" style={{color:"lightgray", fontSize:"20px",cursor: "pointer"}} onClick={()=>history.push('/')}></i><span onClick={()=>history.push('/')} className="nav-words-user">Home</span></div>
                            <div><i class="fa-solid fa-magnifying-glass" onClick={()=>history.push('/search')} style={{color:"lightgray",fontSize:"20px"}}></i><span className="nav-words-user" onClick={()=>history.push('/search')}>Search</span></div>
                            {sessionUser &&
                        <div><i class="fa-regular fa-user"  onClick={()=>history.push('/user')} s style={{color:"lightgray", fontSize:"20px",cursor: "pointer"}}></i><span className="nav-words-user" onClick={()=>history.push('/user')} >Profile</span></div>
                        
                        }
                    {sessionUser &&
                    <div><i class="fa-solid fa-right-from-bracket"  onClick={handleLogout} style={{color: "#fcfcfc"}}></i><span className="nav-words-user" onClick={handleLogout} >Logout</span></div>
                    }

                        

    
                        </div>
                        <div className="library-items-container">
                            <div className="library-item"><i className="fa-regular fa-bookmark" onClick={()=>history.push('/user')} style={{color:"lightgray", fontSize:"20px", marginLeft:"5px"}}></i><span onClick={()=>history.push('/user')}  className="nav-words-user">Library</span></div>
                            <div className="library-button-container">
                           <div><OpenModalButton className="song-button-user" modalComponent={<EditPlaylist playlist={playlist} onUpdate={handlePlaylistUpdate} />} buttonText="Edit Playlist"/></div> 
                                {/* <div><button className="song-button-user">Edit</button></div> */}
                            </div>
                           
                        </div>
                        <div className="library-items-container1">
                            <p className="popcastwords1">Let find some podcast to add</p>
                            <p className="popcastwords1">We'll keep you updated on new episodes</p>
                            <button className="playlist-laanding12" onClick={()=>history.push('/podcast')} >Browse Podcast</button>            
                         </div>

    
                            
    
                       
    
                </div>
                
    
    
    
                <div className="user-main-content-container3">
                    <div className="user-landing-container">
                            <div className="user-profile-icon3">
                                {/* <button className="premiumButton">Premium Options</button> */}
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
                                    {/* <div className="user-info-items">{playlist.description}  </div> */}
                                    <div className="user-info-items"><span style={{marginRight:"5px"}}></span>{songs.length} songs</div>
                                   
                                </div>
    
                            </div>
    
                        </div>
    
                        <div className="seperator">
                            <button className="play-button"><i class="fa-solid fa-play" onClick={playSong}></i></button>
                        
                            
                        </div>
    
    
                    </div>
                    {songs.length>=1? (
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
                                        <div> <i class="fa-solid fa-play"  onClick={()=>handleSelectedSongChange(element,index)} ></i> 
                                     
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
                                <div className="time-item">{element.time} 
                                              
                            <span  style={{marginLeft:"20px"}}>
                            <button> <i className="fa-solid fa-trash" onClick={()=>DeleteSong(element)}></i> </button>
                            </span>
                            </div>
                              
                                </td> 
                            </tr>
                            ))}
                        </tbody>
    
    
                    </table>
                            ):(
                                <div style={{color:"white"}} className="no-songs-playist"> 

                                    Add some Songs to your playlist 
                                </div>
                            ) }
                  </div>
               
    
                </div>
                                
           
                         
    
        </div>
        </>
    )
}

export default PlaylistUserList