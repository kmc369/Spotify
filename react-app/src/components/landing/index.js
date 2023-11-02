import React, { useEffect, useState } from "react";
import './landing.css'
import SignupFormModal from "../SignupFormModal";
import OpenModalButton from "../OpenModalButton";
import { useModal } from '../../context/Modal';
import LoginFormModal from "../LoginFormModal";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Tooltip } from './tooltip';
import  CreatePlayModal from '../../components/CreatePlayModal'
import CreatePlaylist from "../../components/CreatePlayModal";
import TextField from '@mui/material/TextField';
import AudioPlayer from 'react-h5-audio-player';
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session'

 const Landing = ({prop})=>{

 
    const dispatch = useDispatch();
    const [albums ,setAlbums] = useState([])
    
    const sessionUser = useSelector(state=> state.session.user)
    const history = useHistory()
    const [playlist,setPlaylist]= useState({})
    const [search,setSearch] = useState("")
    const { closeModal } = useModal()
    
    // useEffect(()=>{

    //    async  function fetchData (){

    //         const albums = await fetch("/api/albums/")
    //         const albumjson = await albums.json()
    //         console.log("the return albums is", albumjson)

    //         if(sessionUser){

    //             const playlist = await fetch(`/api/playlist/get_playlist/${sessionUser.id}`)
    //             const playlistjson = await playlist.json()
    //         }
          
    //         setAlbums(albumjson)
         
    //     }

    //     fetchData()
    // },[setAlbums])



  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(logout());
    history.push('/')
  };

  const handlePlaylistUpdate = (updatedPlaylist) => {
       
    setPlaylist(updatedPlaylist);
  };

  const handleClick = () => {
    
    const email = "demo@aa.io"
    const password = "password"

 
  // closeModal()
  return dispatch(sessionActions.login(email,password))
}


    if(!albums.length){
        return null
    }

    return(
        <>
        <div>
            {!sessionUser &&
                    <div className="landing-login-sign-buttons">
                    <OpenModalButton className="landing-sign-up"   onItemClick={closeModal}  modalComponent={<SignupFormModal />}  buttonText="Sign Up" />
                    <OpenModalButton className="landing-login"   onItemClick={closeModal}  modalComponent={<LoginFormModal />}   buttonText="Login" />
                    <button className="landing-login"  onClick={handleClick}>
                       Demo
          </button>
                </div>
                }
        </div>
    <div className="landing-container">
   
       
   <div className="landing-sidebar-extra-container"> 

 
        <div className="landing-sidebar-container">
     
          
                <div><i class="fa-solid fa-music" style={{color: "white"}}><span style={{color: "rgb(33, 197, 33)"}} className="sidebar-words">Slotify</span></i></div>
                <div><i class="fa-solid fa-house" style={{color: "#ffffff"}}><span className="sidebar-words">Home</span></i></div>
                <div className="search-container-landing" onClick={()=>history.push(`/search`)} ><i class="fa-solid fa-magnifying-glass" style={{color: "#fcfcfc"}}><span className="sidebar-words" >Search</span></i>
                    
                
                </div>
                {sessionUser &&
                <div><i class="fa-regular fa-user"  onClick={()=>history.push('/user')} style={{color: "#fcfcfc"}}><span className="sidebar-words" onClick={()=>history.push('/user') } >Profile</span></i></div>
                }
                {sessionUser &&
                <div><i class="fa-solid fa-right-from-bracket"  onClick={handleLogout} style={{color: "#fcfcfc"}}><span className="sidebar-words" onClick={handleLogout} >Logout</span></i></div>
                }
             
          
            </div>
      
         <div className="library-container">
            <div className="create-first-paylist">
                <p>Create your first playlist</p>
                <p>It's easy,we'll help you</p>
                {sessionUser?(
                <OpenModalButton modalComponent={<CreatePlaylist onUpdate={handlePlaylistUpdate} />} className="playlist-laanding" buttonText="Create Playlist"/>
                ):(
                    // <button className="playlist-laanding" onClick={} style={{color:"black", textAlign:"center"}}>create Playlist</button>
                    <OpenModalButton
                    className="playlist-laanding"
                    buttonText="Sign Up"
                    onItemClick={closeModal}
                    modalComponent={<SignupFormModal />}
                  />
                )}              
            </div>

            <div className="create-first-paylist1">
                <p>Let find some podcast to add</p>
                <p>We'll keep you updated on new episodes</p>
                <button className="playlist-laanding" onClick={()=>history.push('/podcast')} >Browse Podcast</button>            
                </div>


            </div>
         </div> 


       
            {/* <div className="landing-album-center">
         
        <div className="landing-albums-container">
        
        {albums.map((element, index)=>(
            <div id={`album-items`} className={`album${index}`} key={index} onClick={()=>history.push(`/albumDetails/${element.id}`)}>
               <div> <img className="image-album-item" src={element.image}  style={{width:"150px",height:"150px"}} /> </div>
             ss
                <div className="landing-album-name">{element.name} </div>
                <div className="landing-artist-name">{element.artist.name}</div>
                <div class="landing-type">{element.type} </div>
                </div>
        ))}

        </div>
     </div> */}

     </div>

     

     
     </>

     
    )
}




export default Landing