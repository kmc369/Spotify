import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import {DropzoneArea} from 'material-ui-dropzone';
import { useModal } from '../../context/Modal';

import { FileUpload } from 'primereact/fileupload';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';


const EditPlaylist = ({playlist, onUpdate})=>{
const { closeModal } = useModal()


const sessionUser = useSelector(state => state.session.user)
const [name,setName] = useState(playlist.name)
const [image,setImage]=useState(playlist.image)
const [description, setDesc]=useState(playlist.description)



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

   
   


         const res = await fetch(`/api/playlist/edit_playlist/${playlist.id}`,{
            method:"PUT",
            body: playlist_form
        })
        const res1Data  = await res.json()
        console.log("the data being returned is", res1Data)
       
        setName(res1Data.name)
        setDesc(res1Data.description)
        onUpdate(res1Data)
        
      
  
      
    
 
   

   closeModal()
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
                      
                     <img src={image} width="190px" height="139px;" alt="Preview" className="preview-image" />
                         ) : (

                    <div className="image-add-container">
                        <i className="fa-solid fa-camera" style={{ color: "white" , marginLeft:"8px"}}></i> 
                        <div style={{fontSize:"30px"}} > Add photo</div> 
                     </div>
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
                InputLabelplaylists={{ style: { color: 'white' } }} 

            />
            < TextareaAutosize 
            className="text-area"
            value = {description}
            onChange={(e)=>setDesc(e.target.value)}
            placeholder="Description"
        

            />

        </div>
            </div>


        
        </div>
        <div className="button-container-user">
            <Button className="playlist-button" variant="outlined" onClick={submitPlaylist}>Submit</Button>
        </div>
 
 
         {/* <div className="bottom-p"><p className="paragraph-bottom">
            By proceeding, you agree to give Spotify access to the image you choose to upload. 
            Please make sure you have the right to upload the image.</p>
        </div>   */}
       
        </form>
        </>
    )


}


export default EditPlaylist