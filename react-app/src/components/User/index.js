import React, { useEffect, useState } from "react";
import './userprofile.css'
import { useSelector } from "react-redux";
import ProfileButton from '../Navigation/ProfileButton';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import AudioComponent from "../AudioComponent"; 
import OpenModalButton from "../OpenModalButton";
import CreatePlaylist from "../../components/CreatePlayModal";
import DeletePlaylistModal from "../DeletePlaylistModal";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import Landing from "../landing";


function UserProfile({ onSelectedSongChange }){
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
    const [index,setIndex] = useState(0)
    const dispatch = useDispatch();



    
  const toggleDropdown = (index) => {
    setIndex(index)
    const updatedDropdowns = [...openDropdowns];
    updatedDropdowns[index] = !updatedDropdowns[index];
    setOpenDropdowns(updatedDropdowns);
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

  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(logout());
    history.push('/')
  };

    useEffect(()=>{
        async function FetchData(){
            const res = await fetch(`/api/songs/user/${sessionUser.id}`)
            
            const res_playlist = await fetch(`/api/playlist/get_playlist/${sessionUser.id}`)
            const data = await res.json()
          
            const playlist_data= await res_playlist.json()
            console.log("the songs", data)
           const arr = []
            if(data.length>=1 || playlist_data.length>=1 || songs.length>=1){
                setSongs(data)
                setPlaylist(playlist_data)
           
            }
           }

        FetchData()
   
    },[setSongs])

    const handlePlaylistUpdate = (updatedPlaylist) => {
       
        setPlaylist(updatedPlaylist);
      };

      const handleDeletePlaylist = (updatedPlaylist) => {
       
        setPlaylist(updatedPlaylist);
      };



  
   

  



  

    return(<>
    <div className="entire-user-container">
        <div className="user-container">

            <div className="user-sidebar-container">
                    <div className="nav-items-container">
                        <div><i class="fa-solid fa-house" style={{color:"lightgray", fontSize:"20px",cursor: "pointer"}} onClick={()=>history.push('/')}></i><span onClick={()=>history.push('/')} className="nav-words-user">Home</span></div>
                        <div><i class="fa-solid fa-magnifying-glass" style={{color:"lightgray",fontSize:"20px"}} onClick={()=>history.push('/search')}></i><span onClick={()=>history.push('/search')} className="nav-words-user">Search</span></div>
                        {sessionUser &&
                        <div><i class="fa-solid fa-right-from-bracket"  onClick={handleLogout} style={{color: "#fcfcfc"}}></i><span className="nav-words-user" onClick={handleLogout} >Logout</span></div>
                            }

                    </div>
                    <div className="library-items-container">
                        <div className="library-item" style={{cursor:"pointer"}}><i className="fa-regular fa-bookmark" style={{color:"lightgray", fontSize:"20px", marginLeft:"5px"}}></i><span  className="nav-words-user">Library</span></div>
                        <div className="library-button-container">
                            {/* <div><button className="song-button-user">Podcast</button></div> */}
                            <div style={{cursor:"pointer"}}><OpenModalButton modalComponent={<CreatePlaylist onUpdate={handlePlaylistUpdate}/>}  className="song-button-user" buttonText="Playlist"/></div>

                        </div>
                       
                    </div>
                    <div className="playlist-container">
                    <div className="playlist-header"><h3>{sessionUser.username}'s Playlist</h3> </div>
                        {userPlaylist.length>=1 && (!userPlaylist[0].message) ?(
                        
                        userPlaylist.map((element, index) => (
                        
                            <div key={index} className="playlist-items"  >
                                {console.log(element)}
                              
                              <div className="image-andpop-name">
                                <img  className="playlist-image-1" height="70px" width="70px" src={userPlaylist[index].image} style={{ borderRadiu:"5px" }} onClick={()=>history.push(`/user_list/${element.id}`)}/>

                                    <div style={{ color: "white" }}>{element.name}</div>
                            </div>

                            <div className="delete-container">

                                    <div ><OpenModalButton className="delete-div" style={{marginLeft:"10px"}} modalComponent={<DeletePlaylistModal playlist={element} onUpdate={handleDeletePlaylist}  />} buttonText={<i className="fa-solid fa-trash"></i>} /></div>

                                    </div>
                            </div>
                                ))
                            ) : (
                            <div  style={{color:"white" ,textAlign:"center"}}> Create a Playist </div>
                                )}
                        </div>

                        

                   

            </div>
            



            <div className="user-main-content-container">
                <div className="user-landing-container">
                        <div className="user-profile-icon">
                            {/* <button className="premiumButton">Premium Options</button> */}
                            <ProfileButton user={sessionUser} />
                        </div>
                    <div className="user-landing-image">
                        <div className="user-landing-image-item">
                            {songs.length>=1 ? (
                              
                                // <div><img src={randomImage.albums.image} style={{borderRadius:"5px"}} height="400px" width="400px"/></div>
                                <div><img src={songs[0].albums.image} style={{borderRadius:"5px"}}  height="300px" width="300px"/></div>
                            ):(
                            <div><img src="https://wallpapers.com/images/hd/neon-green-music-notes-eloz08thhwuc7opf.jpg" style={{borderRadius:"5px"} }  height="400px" width="400px" /></div>
                           
                            )}
                        </div>
                        <div className="song-starred-info">
                            <div className="song-word">Song List</div>
                            <div ><h2 className="your-songs">{sessionUser.username}'s Songs</h2></div>
                            <div className="user-info">
                                <div className="user-info-items">{sessionUser.email}  </div>
                                <div className="user-info-items"><span style={{marginRight:"5px"}}>•</span>{songs.length} songs</div>
                               
                            </div>

                        </div>

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
                      
                        {songs.length>=1 ? (
                            songs.map((element, index) => (
                            <tr key={index}>
                                <td>
                                <div
                                    className="hash-item"
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(null)}
                                >
                                    {hoverIndex !== index ? (
                                    <div>{index + 1}</div>
                                    ) : (
                                    <div>
                                        <i
                                        className="fa-solid fa-play"
                                        onClick={() => handleSelectedSongChange(element, index, songs)}
                                        ></i>
                                    </div>
                                    )}
                                </div>
                                </td>
                                <td className="column1-container">
                                <img src={element.albums.image} height="50px" width="50px" style={{ marginRight: "10px" }} />
                                <div className="title-artist-name-container">
                                    <div>{element.name}</div>
                                    <div>{element.artist.name}</div>
                                </div>
                                </td>
                                <td className="column2-container">
                                <div className="album-name-item">{element.albums.name}</div>
                                </td>
                                <td className="column3-container">
                                <div className="genre-type-item">{element.type}</div>
                                </td>
                                <td className="column4-container">
                                <div className="time-item">
                                    {element.time}
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
                                    </span>
                                </div>
                                </td>
                            </tr>
                            ))
                        ) : (
                            <tr>
                            <td colSpan="5" style={{color:"white", textAlign:"center", fontSize:"30px"}}>Add Songs To your Library</td>
                            </tr>
                        )}
                        </tbody>



                </table>
              </div>
             
       

            </div>



                    {/* <AudioComponent prop={selectSong}/> */}
                  
  


        
     

    </div>
    </>
    )
}


export default UserProfile