import React, { useEffect, useState } from "react";
import './userprofile.css'
import { useSelector } from "react-redux";
import ProfileButton from '../Navigation/ProfileButton';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import AudioComponent from "../AudioComponent"; 


function UserProfile({}){
    const [songs,setSongs] = useState([])
    const sessionUser = useSelector(state => state.session.user)
    const [showDropdown, setShowDropdown] = useState(false);
    const history = useHistory()
    const [playing, setPlaying] = useState(false)
    const [hoverIndex, setHoverIndex] = useState(null)
    const [selectSong, setSelectedSong] =useState(null)
    const [userPlaylist, setPlaylist]= useState([])
    const [randomImage, SetRandomImage]=useState(null)
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [dropdownVisible, setDropdownVisible] = useState(false);


    const [openDropdowns, setOpenDropdowns] = useState(Array(songs.length).fill(false));

  const toggleDropdown = (index) => {
    const updatedDropdowns = [...openDropdowns];
    updatedDropdowns[index] = !updatedDropdowns[index];
    setOpenDropdowns(updatedDropdowns);
  };
  
    useEffect(()=>{
        async function FetchData(){
            const res = await fetch(`/api/songs/user/${sessionUser.id}`)
            const res_playlist = await fetch(`/api/songs/playlist/${sessionUser.id}`)
            const data = await res.json()
            const playlist_data= await res_playlist.json()
         
           const arr = []
            if(data.length>=1 || playlist_data.length>=1){
                setSongs(data)
              
                for(let i =0; i<data.length; i++){
                 
                    arr.push(data[i].albums.image)
                }
                const randomIndex = Math.floor(Math.random() * data.length);
                SetRandomImage(data[randomIndex])

              
               
                setPlaylist(playlist_data)
           
            }
           }

        FetchData()
   
    },[setSongs])



    async function addToPlaylist(element, playlist){
        console.log(element ,"SONG IS")
        console.log(playlist, "PLAYLIST IS")
    
        const songId = Number(element.id)
        const playlist_id = Number(playlist.id)
        console.log(playlist_id,"PLAYLIST ID  and SongId", songId )
        const Playlist_songs = await fetch(`/api/playlist/add_song/${playlist_id}/${songId}`,{
            method:"POST",
        })
        const playlist_songs_json = Playlist_songs.json()

    }

   
    const playNextSong = () => {
        if (currentSongIndex < songs.length - 1) {
          setCurrentSongIndex(currentSongIndex + 1);
          setPlaying(true); 
        }
      };
  
   

    if(songs.length===0 || !sessionUser ){
        
        return null
    }


//  console.log("songs",songs)
  

    return(<>
    <div className="entire-user-container">
        <div className="user-container">

            <div className="user-sidebar-container">
                    <div className="nav-items-container">
                        <div><i class="fa-solid fa-house" style={{color:"lightgray", fontSize:"20px",cursor: "pointer"}} onClick={()=>history.push('/')}></i><span onClick={()=>history.push('/')} className="nav-words-user">Home</span></div>
                        <div><i class="fa-solid fa-magnifying-glass" style={{color:"lightgray",fontSize:"20px"}} onClick={()=>history.push('/search')}></i><span onClick={()=>history.push('/search')} className="nav-words-user">Search</span></div>

                    </div>
                    <div className="library-items-container">
                        <div className="library-item"><i className="fa-regular fa-bookmark" style={{color:"lightgray", fontSize:"20px", marginLeft:"5px"}}></i><span  className="nav-words-user">Library</span></div>
                        <div className="library-button-container">
                            <div><button className="song-button-user">Songs</button></div>
                            <div><button className="song-button-user">Playlist</button></div>
                        </div>
                       
                    </div>
                    <div className="playlist-container">
                    <div className="playlist-header"><h3>{sessionUser.username}'s Playlist</h3> </div>
                        {userPlaylist.length>=1 && (!userPlaylist[0].message) ?(
                         
                        userPlaylist.map((element, index) => (
                        
                          
                            <div key={index} className="playlist-items" onClick={()=>history.push(`/user_list/${element.id}`)} >
                              
                                <img  className="playlist-image-1" height="70px" width="70px" src={userPlaylist[index].image} style={{ borderRadiu:"5px" }} />
                                    <div style={{ color: "white" }}>{element.name}</div>
                                    {/* <div><button>Create Another Playlist</button> </div> */}
                                    </div>
                                ))
                            ) : (
                            <div>Create Playlist</div>
                                )}
                        </div>

                        

                   

            </div>
            



            <div className="user-main-content-container">
                <div className="user-landing-container">
                        <div className="user-profile-icon">
                            <button className="premiumButton">Premium Options</button>
                            <ProfileButton user={sessionUser} />
                        </div>
                    <div className="user-landing-image">
                        <div className="user-landing-image-item">
                            {randomImage? (
                              
                                <div><img src={randomImage.albums.image} style={{borderRadius:"5px"}} height="400px" width="400px"/></div>
                            ):(
                            <div><img src={songs[0].albums.image} style={{borderRadius:"5px"}} /></div>
                            )}
                        </div>
                        <div className="song-starred-info">
                            <div className="song-word">Songs</div>
                            <div ><h2 className="your-songs">{sessionUser.username}'s Songs</h2></div>
                            <div className="user-info">
                                <div className="user-info-items">{sessionUser.email}  </div>
                                <div className="user-info-items"><span style={{marginRight:"5px"}}>•</span>{songs.length} songs</div>
                               
                            </div>

                        </div>

                    </div>

                    {/* <div className="seperator">
                        <button className="play-button"><i class="fa-solid fa-play" onClick={()=>setPlaying(!playing)}></i></button>
                    
                        
                    </div> */}
                       <div className="seperator">
                            <button className="play-button" onClick={() => setPlaying(!playing)}>
                            <i className={`fa-solid ${playing ? 'fa-pause' : 'fa-play'}`} />
                            </button>
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
                                        // ()=>setSelectedSong({element,index})
                                    <div> <i class="fa-solid fa-play"  onClick={()=>setSelectedSong({element,index, songs})}  ></i> 
                                    {/* {console.log(selectSong,"SONG")} */}
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
                            <div className="time-item">
                                
                                {element.time} 
                                {/* onClick={()=>addToPlaylist(element)} */}
                 <span className="playlist-option-container">
                    <i className="fa-solid fa-plus" onClick={() => toggleDropdown(index)}></i>
                    {openDropdowns[index] && (
                      <ul className="playlist-dropdown-options">
                        {userPlaylist.map((userPlaylistElement, userIndex) => (
                          <li
                            className="playlist-dropdown-option"
                            style={{ color: 'white' }}
                            key={userIndex}
                            onClick={()=>addToPlaylist(element, userPlaylistElement)}
                            >
                            {userPlaylistElement.name}
                            
                          </li>
                        ))}
                      </ul>
                    )}
                  </span>
                                
                             </div>
                          
                            </td> 

                           
                        </tr>
                        ))}
                    </tbody>


                </table>
              </div>
             
       

            </div>



                    <div>
                    
                        {songs.length > 0 && !selectSong &&(
                            <div className="audio-container">
                            <img src={songs[currentSongIndex].albums.image} height="70px" width="70px" />
                            <AudioPlayer
                                id='audio-button'
                                src={songs[currentSongIndex].audio_url}
                                autoPlay={playing}
                                volume={0.3}
                                showSkipControls={false}
                                onEnded={playNextSong}
                            />
                            
                            </div>
                        )}
                        </div>

                    {selectSong && (
                
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
                      
                    )}
  


        
        {/* {selectSong && selectedSongEl !==null &&
        <div className="audio-container">
            <AudioComponent element={selectedSongEl } index={selectedSongIndex} songs={songs} ad={ad} />
                </div>
        } */}

    </div>
    </>
    )
}


export default UserProfile