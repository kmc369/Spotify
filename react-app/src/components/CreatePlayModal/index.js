import React, { useEffect, useState } from "react";
import './createplaylist.css'
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import {DropzoneArea} from 'material-ui-dropzone';

import { FileUpload } from 'primereact/fileupload';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';

const CreatePlaylist = ()=>{
const [name,setName] = useState("")
const sessionUser = useSelector(state => state.session.user)
const [image,setImage]=useState(null)
const [description, setDesc]=useState("")

const submitPlaylist =async (e)=>{
    e.preventDefault();

    const playlist_form= new FormData();
    if (image !== null) {
        const mainFile = await fetch(image)
            .then(response => response.blob())
            .then(blob => new File([blob], 'main_image.jpg', { type: blob.type }));

            playlist_form.append('image', mainFile);
    }
    playlist_form.append("name", name)
    playlist_form.append("user_id", sessionUser.id)
    playlist_form.append("description",description)



    const res = await fetch('/api/playlist/new_playlist',{
        method:"POST",
        // headers: { 'Content-Type': 'application/json' },
        body: playlist_form
    })
    const resData = await res.json();
    console.log("res",resData)
   
}



    return (
        <>
        <form className="form-playlist">
        <div className="create-playlist-landing">
            <h2 className="create-playlist-header">Create Playlist</h2>
            <div className="playlist-image-items">

            <div className="image-create-container1">

                        
                    <label style={{width:"fit-content"}}  className='custom-file-input-label' htmlFor="file-input">
                    {image ? (
                      
                     <img src={image} style={{width:"90px",height:"90px"}}  alt="Preview" className="preview-image" />
                         ) : (
                         <>
                    <i className="fa-solid fa-camera" style={{ color: "#121416" }}></i> 
                     <div>Add a photo</div> 
                             </>
                    )}
                         </label>
                    
                    <input  
                    onChange={(e)=>setImage(URL.createObjectURL(e.target.files[0]))}
                    type="file" 
                    id="file-input" 
                    className="input-image1" 
                    accept="image/*" />
                    </div>
                    {/* {(imageLoading)&& <p>Loading...</p>} */}
                    
                 
                

          
            <div className="name-description">
            <TextField
                className="playlist-text-input"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                label="Playlist Name" 
                variant="outlined"
            />
            < TextareaAutosize 
            value = {description}
            onChange={(e)=>setDesc(e.target.value)}

            />

        </div>
            </div>


        
        </div>
            <Button className="playlist-button" variant="outlined" onClick={submitPlaylist}>Outlined</Button>
        </form>
        </>
    )
}


export default CreatePlaylist


