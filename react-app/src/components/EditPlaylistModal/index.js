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
const [error,setError] = useState({})


const submitPlaylist = async (e) => {
    e.preventDefault();
  
    const err = {};
    const ALLOWED_EXTENSIONS = ["pdf", "png", "jpg", "jpeg", "gif", "webp"];
    
    const fileInput = document.getElementById('file-input');
    const newImage = fileInput.files[0];
  
    // Check if a new image was selected
    if (newImage) {
      const newFileExtension = newImage.name.split('.').pop();
      if (!(ALLOWED_EXTENSIONS.includes(newFileExtension))) {
        err.image = "Not a supported image format. Try jpg, png, pdf, jpeg, gif, or webp";
      }
      // Update the fileExtension and image state
      setImage(URL.createObjectURL(newImage));
      let fileExtension = newFileExtension;
    }
  
    if (name.length > 10) {
      err.name = "Name must be less than 10 characters";
    }
    if (name.length === 0) {
      err.name = "Name can't be empty";
    }
  
    if (description.length > 20) {
      err.description = "Description must be less than 20 characters";
    }
    if (description.length === 0) {
      err.description = "Description can't be empty";
    }
  
    if (!image) {
      err.image = "Image can't be empty";
    }
  
    setError(err);
  
    if (Object.keys(err).length === 0) {
      const playlist_form = new FormData();
  
      if (newImage) {
        playlist_form.append('image', newImage);
      }
  
      playlist_form.append('name', name);
      playlist_form.append('user_id', sessionUser.id);
      playlist_form.append('description', description);
  
      const res = await fetch(`/api/playlist/edit_playlist/${playlist.id}`, {
        method: "PUT",
        body: playlist_form,
      });
  
      const res1Data = await res.json();
      console.log("the data being returned is", res1Data);
      setImage(res1Data.image);
      setName(res1Data.name);
      setDesc(res1Data.description);
      onUpdate(res1Data);
  
  
      setError({});
      closeModal();
    } else {
      console.log(error);
    }
  };

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
             <p className="error">{error.name}</p>
            < TextareaAutosize 
            className="text-area"
            value = {description}
            onChange={(e)=>setDesc(e.target.value)}
            placeholder="Description"
        

            />
            <p className="error">{error.description}</p>


        </div>
            </div>


        
        </div>
        <p className="error">{error.image}</p>

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