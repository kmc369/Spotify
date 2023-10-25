import React, { useEffect, useState } from "react";
import './createplaylist.css'
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import {DropzoneArea} from 'material-ui-dropzone';

const CreatePlaylist = ()=>{
const [name,setName] = useState("")
const sessionUser = useSelector(state => state.session.user)

const submitPlaylist = ()=>{


}

    return (
        <>
        <form className="form-playlist">
        <div className="create-playlist-landing">
            <h2 className="create-playlist-header">Create Playlist</h2>
            <div className="playlist-image-items">

            <DropzoneArea
               
                acceptedFiles={['image/*']} // Specify accepted file types (images)
                filesLimit={1} // Set the limit on the number of files
              
      />
          
            <div className="name-description">
            <TextField
                className="playlist-text-input"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                label="Playlist Name" 
                variant="outlined"
            />
            < TextareaAutosize 
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


