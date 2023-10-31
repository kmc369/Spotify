import React, { useState, useEffect, useRef } from "react";
import { useSelector  } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useModal } from "../../context/Modal";
import "./deleteplaylist.css"
function DeletePlaylistModal ({playlist,onUpdate}){
  
    const history = useHistory()
    const sessionUser = useSelector(state=>state.session.user)
    const { closeModal } = useModal();

    const handleDelete = async () => {
     const res= await fetch(`/api/playlist/delete_playlist/${playlist.id}/`,{
      method:"DELETE"
     })
      const resData = await res.json()
      // console.log(resData)
    
      onUpdate(resData)
      closeModal()
    
    };

      return (
          <>
          <>
    <div className="deleteModel-container">
      <h2 className="delete-review-word">Are you sure you want to delete this Playlist</h2>
      <div> <p className="delete-review-word1">This action can not be undone</p></div>
      <div className="buttonItems">
        <button className="delete-button1" onClick={handleDelete}>Yes</button>
        <button className="delete-button" onClick={closeModal}>Cancel</button>
      </div>
    </div>
    </>
          </>
      )
      


}

export default DeletePlaylistModal