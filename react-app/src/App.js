import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Landing from "./components/landing";
import UserProfile from './components/User';
import AlbumDetail from "./components/AlbumDetails";
import PlaylistUser from "./components/PlaylistUser";
import SearchSongs from "./components/SearchSongs";
import SearchType from "./components/SearchSongs";
import AudioComponent from "./components/AudioComponent";
import Podcast from "./components/Podcast";

// const ad = "https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Want+A+Break+From+The+ADs+-7OBacT66SCM-192k-1698588820.mp3"
function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSelectedSongChange = (newSelectedSong) => {
    setSelectedSong(newSelectedSong);
  };


  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
   
      {isLoaded && (
        <Switch>
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>


          <Route exact path="/user" >
            <UserProfile  onSelectedSongChange={handleSelectedSongChange} />
          </Route>

        <Route exact path="/user_list/:playlistId/">
          <PlaylistUser  onSelectedSongChange={handleSelectedSongChange}/>
        </Route>

       
        <Route exact path="/search">
          <SearchType />
        </Route>

          <Route exact path="/albumDetails/:album_id"> 
            <AlbumDetail onSelectedSongChange={handleSelectedSongChange} />
           </Route>


          <Route exact path="/" >
            <Landing />
          </Route>

          <Route path="/podcast">
            <Podcast />
          </Route>

          
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
        
      )}
         {<AudioComponent prop={selectedSong}/>}
    </>
  );
}

export default App;
