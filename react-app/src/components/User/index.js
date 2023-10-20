import React, { useEffect, useState } from "react";
import './userprofile.css'
import { useSelector } from "react-redux";
import ProfileButton from '../Navigation/ProfileButton';

function UserProfile(){
    const [songs,setSongs] = useState([])
    const sessionUser = useSelector(state => state.session.user)
  
    useEffect(()=>{

        async function FetchData(){
            const res = await fetch(`/api/songs/user/${sessionUser.id}`)
            const data = await res.json()
            console.log(data)
            if(data.length>1){
                setSongs(data)
             
               
            }
            else{
              
            }
            
        }

        FetchData()
    },[setSongs])

    if(songs.length===0){
        
        return null
    }

    return(<>
    <div className="entire-user-container">
        <div className="user-container">

            <div className="user-sidebar-container">
                    <div className="nav-items-container">
                        <div><i class="fa-solid fa-house" style={{color:"lightgray", fontSize:"20px"}}></i><span className="nav-words-user">Home</span></div>
                        <div><i class="fa-solid fa-magnifying-glass" style={{color:"lightgray",fontSize:"20px"}}></i><span className="nav-words-user">Search</span></div>

                    </div>
                    <div className="library-items-container">
                        <div className="library-item"><i className="fa-regular fa-bookmark" style={{color:"lightgray", fontSize:"20px", marginLeft:"5px"}}></i><span  className="nav-words-user">Library</span></div>
                        <div className="library-button-container">
                            <div><button className="song-button-user">Songs</button></div>
                            <div><button className="song-button-user">Albums</button></div>
                        </div>
                        <div>Search</div>
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
                            <div><img src={songs[0].albums.image} style={{borderRadius:"5px"}} /></div>
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

                    <div className="seperator">
                        <button className="play-button"><i class="fa-solid fa-play"></i></button>
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
                            <td><div className="hash-item">{index+1}</div></td>
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
       

    </div>
    </>
    )
}


export default UserProfile