import React, { useEffect, useState } from "react";
import './search.css'
import CreatePlaylist from "../CreatePlayModal";
import SignupFormModal from "../SignupFormModal";
import OpenModalButton from "../OpenModalButton";
import { useModal } from '../../context/Modal';
import LoginFormModal from "../LoginFormModal";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const SearchType = ()=>{
    const [albums ,setAlbums] = useState([])
    const { closeModal } = useModal();
    const sessionUser = useSelector(state=> state.session.user)
    const history = useHistory()
    const {type } = useParams()
    const [search,setSearch] = useState("")



    const fetchData = async () => {
        try {
     
            const Type_Albums = await fetch(`/api/albums/albums_type/${search}`);
            const albumjson = await Type_Albums.json();
            setAlbums(albumjson);
        } catch (error) {
         
        }
    }

    useEffect(() => {
        fetchData(); // Initial fetch when the component mounts
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(); // Call fetchData to update the results when the form is submitted.
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
                <div><i class="fa-solid fa-house" style={{color: "#ffffff"}}  onClick={()=>history.push('/')}><span className="sidebar-words">Home</span></i></div>
                {/* <div><i class="fa-solid fa-magnifying-glass" style={{color: "#fcfcfc"}}><span className="sidebar-words" >Search</span></i></div> */}
                {sessionUser &&
                <div><i class="fa-regular fa-user"  onClick={()=>history.push('/user')} style={{color: "#fcfcfc"}}><span className="sidebar-words" onClick={()=>history.push('/user') } >Profile</span></i></div>
                }
             
               
            </div>
      
         <div className="library-container">
            <div className="create-first-paylist">
                <p>Create your first playlist</p>
                <p>It's easy,we'll help you</p>
                <OpenModalButton modalComponent={<CreatePlaylist/>} className="playlist-laanding" buttonText="Create Playlist"/>
                
            </div>

            <div className="create-first-paylist1">
                <p>Let find some podcast to add</p>
                <p>We'll keep you updated on new episodes</p>
                <button className="playlist-laanding" onClick={()=>history.push(`/podcast`)} >Browse Podcast</button>            
                </div>


            </div>
         </div> 


       
            <div className="landing-album-center">
                 <form className="submit-label-form" onSubmit={handleSubmit}>
                 <div><i class="fa-solid fa-magnifying-glass magnigy" style={{color: "#fcfcfc"}}></i></div>
                 <div className="label-container"><label className="label-search-container">
               

                    <input
                    className="search-material-textfield"
                    value={search} 
                    onChange={(e)=>setSearch(e.target.value)}
                
                    />
                </label></div>
                </form> 
         
        <div className="landing-albums-container">
        
        {albums.map((element, index)=>(
            <div id={`album-items`} className={`album${index}`} key={index} onClick={()=>history.push(`/albumDetails/${element.id}`)}>
               <div> <img className="image-album-item" src={element.image}  style={{width:"150px",height:"150px"}} /> </div>
             
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

export default SearchType