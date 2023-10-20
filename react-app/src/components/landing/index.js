import React, { useEffect, useState } from "react";
import './landing.css'
import SignupFormModal from "../SignupFormModal";
import OpenModalButton from "../OpenModalButton";
import { useModal } from '../../context/Modal';
import LoginFormModal from "../LoginFormModal";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
 const Landing = ()=>{
    const [albums ,setAlbums] = useState([])
    const { closeModal } = useModal();
    const sessionUser = useSelector(state=> state.session.user)
    const history = useHistory()
    useEffect(()=>{

       async  function fetchData (){
            const albums = await fetch("/api/albums/")
            const albumjson = await albums.json()
            setAlbums(albumjson)
        }

        fetchData()
    },[setAlbums])

 

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
                
                </div>
                }
        </div>
    <div className="landing-container">
   
       
   <div className="landing-sidebar-extra-container"> 

 
        <div className="landing-sidebar-container">
     
          
                <div><i class="fa-solid fa-music" style={{color: "white"}}><span style={{color: "rgb(33, 197, 33)"}} className="sidebar-words">Slotify</span></i></div>
                <div><i class="fa-solid fa-house" style={{color: "#ffffff"}}><span className="sidebar-words">Home</span></i></div>
                <div><i class="fa-solid fa-magnifying-glass" style={{color: "#fcfcfc"}}><span className="sidebar-words" >Search</span></i></div>
                {sessionUser &&
                <div><i class="fa-regular fa-user"  onClick={()=>history.push('/user')} style={{color: "#fcfcfc"}}><span className="sidebar-words" onClick={()=>history.push('/user') } >Profile</span></i></div>
                }
             
               
            </div>
      
         <div className="library-container">
            <div className="create-first-paylist">
                <p>Create your first playlist</p>
                <p>It's easy,we'll help you</p>
                <button className="playlist-laanding">Create Playlist</button>
            </div>

            <div className="create-first-paylist1">
                <p>Let find some podcast to add</p>
                <p>We'll keep you updated on new episodes</p>
                <button className="playlist-laanding">Create Playlist</button>
            </div>


            </div>
         </div> 


       
            <div className="landing-album-center">
         
        <div className="landing-albums-container">
        
        {albums.map((element, index)=>(
            <div id={`album-items`} className={`album${index}`} key={index}>
               <div> <img className="image-album-item" src={element.image}  style={{width:"150px",height:"150px"}}/> </div>
                <div className="landing-album-name">{element.name} </div>
                <div className="landing-artist-name">{element.artist.name}</div>
                <div class="landing-type">{element.type} </div>
                </div>
        ))}

        </div>
     </div>
     </div>
     </>
    )
}


export default Landing