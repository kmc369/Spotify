import React, { useEffect, useState } from "react";
import './albumdetail.css'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from '../Navigation/ProfileButton';
import OpenModalButton from "../OpenModalButton";

function AlbumDetail({ onSelectedSongChange }){

    const [songs,setSongs] = useState([])
    const sessionUser = useSelector(state => state.session?.user)
    const history = useHistory()
    const [playing, setPlaying] = useState(false)
    const [hoverIndex, setHoverIndex] = useState(null)
    const [selectSong, setSelectedSong] =useState(null)
    const {album_id} = useParams()
    const album_num = Number(album_id)
    const [openDropdowns, setOpenDropdowns] = useState(Array(songs.length).fill(false));
    const [index,setIndex] = useState(0)
    const [userPlaylist, setPlaylist]= useState([])
       
  const toggleDropdown = (index) => {
    setIndex(index)
    const updatedDropdowns = [...openDropdowns];
    updatedDropdowns[index] = !updatedDropdowns[index];
    setOpenDropdowns(updatedDropdowns);
  };

  const toggleDropdownLibrary = async(element ,index) => {
 
    const song_id = element.id
    const user_id = sessionUser.id

    const res = await fetch(`/api/songs/library/${user_id}/${song_id}`,{
        method:"POST"
    })
    const added_to_library = await res.json()
    history.push(`/user`)
   
   
  };




    const handleSelectedSongChange = async (element,index,songs) => {
        
        await setSelectedSong({element,index,songs})
        onSelectedSongChange({element,index,songs});
      };
    
      async function addToPlaylist(element, playlist){
      
    
        const songId = Number(element.id)
        const playlist_id = Number(playlist.id)
       
        const Playlist_songs = await fetch(`/api/playlist/add_song/${playlist_id}/${songId}`,{
            method:"POST",
        })
    
        toggleDropdown(index);
    
        const playlist_songs_json = Playlist_songs.json()


    }


    useEffect(()=>{
        async function FetchData(){
            const res = await fetch(`/api/songs/${album_num}`)

            if(sessionUser){
                const res_playlist = await fetch(`/api/playlist/get_playlist/${sessionUser.id}`)
                const playlist_data= await res_playlist.json()
                setPlaylist(playlist_data)

            }
           
            const data = await res.json()
            // console.log(data)
            
           
            if(data.length>1){
                setSongs(data)
              
             
               
            }
            else{
              
            }
            
        }

        FetchData()
    },[setSongs])

    function playSong(){
        setPlaying(true)

    }

   
    if(songs.length===0 ){ 
        
        return null
    }

    return(
    <div className="entire-user-container">
        <div className="user-container">

            <div className="user-sidebar-container">
                    <div className="nav-items-container">
                        <div><i class="fa-solid fa-house" style={{color:"lightgray", fontSize:"20px",cursor: "pointer"}} onClick={()=>history.push('/')}></i><span onClick={()=>history.push('/')} className="nav-words-user">Home</span></div>
                        <div><i class="fa-solid fa-magnifying-glass" style={{color:"lightgray",fontSize:"20px"}} onClick={()=>history.push('/search')}></i><span onClick={()=>history.push('/search')} className="nav-words-user">Search</span></div>
                        {sessionUser &&
                <div><i class="fa-regular fa-user"  onClick={()=>history.push('/user')} style={{color: "#fcfcfc"}}></i><span className="nav-words-user" onClick={()=>history.push('/user') } >Profile</span></div>
                }

                    </div>
                    <div className="library-items-container"> 

                        <div className="library-item"><i className="fa-regular fa-bookmark"  onClick={()=>history.push('/user')} style={{color:"lightgray", fontSize:"20px", marginLeft:"5px"}}></i><span onClick={()=>history.push('/user')}  className="nav-words-user">Library</span></div>
                        <div className="library-items-container1">
                            <p className="popcastwords1">Let find some podcast to add</p>
                            <p className="popcastwords1">We'll keep you updated on new episodes</p>
                            <button className="playlist-laanding12" onClick={()=>history.push('/podcast')} >Browse Podcast</button>            
                         </div>
                    </div> 

                    



            </div>



            <div className="user-main-content-container1">
                <div className="user-landing-container">
                    {sessionUser &&
                        <div className="user-profile-icon1">
                            {/* <button className="premiumButton">Premium Options</button> */}
                            <ProfileButton user={sessionUser} />
                        </div> 
                        }
                     <div className="user-landing-image1">
                        <div className="user-landing-image-item">
                           
                            <div>< img src={songs[0]?.albums?.image} className="image-user-photo" style={{borderRadius:"5px"}} /></div>
                        </div>
                        <div className="song-starred-info">
                            <div className="song-word">Songs</div>
                            <div ><h2 className="your-songs">{songs[0].artist.name}</h2></div>
                            <div className="user-info">
                               
                                <div className="user-info-items"><span style={{marginRight:"5px"}}>•</span>{songs.length} songs</div>
                               
                            </div>

                        </div>

                    </div>

                    {/* <div className="seperator">
                        <button className="play-button"><i class="fa-solid fa-play" onClick={playSong}></i></button>
                    
                        
                    </div> */}


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
                                    <div> <i class="fa-solid fa-play"  onClick={()=>handleSelectedSongChange(element,index,songs)} ></i> 
                                  
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
                                {sessionUser && 
                                    <span className="playlist-option-container">
                                    <i className="fa-solid fa-plus" onClick={() => toggleDropdown(index)}></i>
                                    {openDropdowns[index] && (
                                        <ul className="playlist-dropdown-options">
                                        {userPlaylist.map((userPlaylistElement, userIndex) => (
                                            <li
                                            className="playlist-dropdown-option"
                                            style={{ color: 'white' }}
                                            key={userIndex}
                                            onClick={() => addToPlaylist(element, userPlaylistElement)}
                                            >
                                            {userPlaylistElement.name}
                                            </li>
                                        ))}
                                        </ul>
                                    )}
                                    <i className="fa-regular fa-bookmark" style={{marginLeft:"25px"}} onClick={() => toggleDropdownLibrary(element, index)}></i>
                                    </span>
                                    }
                                </div>
                        </td>
                        </tr>
                        ))}
                    </tbody>


                </table>
              </div>
             
           

            </div>

       
                

    </div>
    )

}

export default AlbumDetail