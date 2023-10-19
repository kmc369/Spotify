import React, { useEffect, useState } from "react";
import './landing.css'
 const Landing = ()=>{
    const [albums ,setAlbums] = useState([])

    useEffect(()=>{

       async  function fetchData (){
            const albums = await fetch("/api/albums/")
            const albumjson = await albums.json()
            setAlbums(albumjson)
        }

        fetchData()
    },[setAlbums])

    function handleSearch(){
        console.log("hello")
    }

    if(!albums.length){
        return null
    }

    return(
        <>
  
    
    <div className="landing-container">
 
       
   <div className="landing-sidebar-extra-container"> 
 
        <div className="landing-sidebar-container">
          
                <div><i class="fa-solid fa-music" style={{color: "white"}}><span style={{color: "rgb(33, 197, 33)"}} className="sidebar-words">Slotify</span></i></div>
                <div><i class="fa-solid fa-house" style={{color: "#ffffff"}}><span className="sidebar-words">Home</span></i></div>
                <div><i class="fa-solid fa-magnifying-glass" style={{color: "#fcfcfc"}}><span className="sidebar-words" >Search</span></i></div>
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
            <div className="landing-login-sign-buttons">
                <button className="landing-sign-up">Sign Up</button>
                <button className="landing-login">Login</button>
            </div>
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