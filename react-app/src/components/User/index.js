import React, { useEffect, useState } from "react";
import './userprofile.css'
import { useSelector } from "react-redux";


function UserProfile(){
    const [songs,setSongs] = useState([])
    const user = useSelector(state => state.session.user)
  
    useEffect(()=>{

        async function FetchData(){
            const res = await fetch(`/api/songs/user/${user.id}`)
            const data = await res.json()
            if(data[0].name){
                setSongs(data)
                console.log(songs ,"SONG")
            }
            else{
                // theres an error and we need to handle that 
            }
            
        }

        FetchData()
    },[setSongs])

    if(!songs){
        return null
    }

    return(<>
    <div className="entire-user-container">
        <div className="user-container">

            <div className="user-sidebar-container">
                    <div className="nav-items-container"></div>
                    <div className="library-items-container">
                        <div className="library-button-container">
                            <div>Songs</div>
                            <div>Albums</div>
                        </div>
                        <div>Search</div>
                    </div>
            </div>


            <div className="user-main-content-container">

            <div className="user-main-content-container">
                <table>
                    <thead className="table-header-container">
                        <th>Title</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Time</th>
                    </thead>
                    <tbody>
                        {songs.map((element, index) => (
                        <tr key={index}>
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

    </div>
    </>
    )
}


export default UserProfile