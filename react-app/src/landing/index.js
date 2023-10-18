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
        <div className="landing-container">
        <div className="landing-sidebar-container">
            <div><i class="fa-solid fa-music" style={{color: "white"}}><span className="sidebar-words">Slotify</span></i></div>
            <div><i class="fa-solid fa-house" style={{color: "#ffffff"}}><span className="sidebar-words">Home</span></i></div>
            <div><i class="fa-solid fa-magnifying-glass" style={{color: "#fcfcfc"}}><span className="sidebar-words" >Search</span></i></div>
        </div>


        <div className="landing-albums-container">
        {albums.map((element, index)=>(
            <div id="album-items" className={`album${index}`} key={index}>
                <img src={element.image} />
                {element.name} 
                {element.artist.name}
                </div>
        ))}

        </div>
        </div>
    )
}


export default Landing