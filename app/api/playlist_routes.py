from flask import Blueprint, jsonify, request 
from flask_login import login_required
from app.models import db,Playlist,Song
from .aws_helper import get_unique_filename,upload_file_to_s3,remove_file_from_s3
from ..forms.playlist_form import PlaylistForm
playlist_bp = Blueprint('playlist',__name__)


@playlist_bp.route("/new_playlist", methods=["POST"])
def create_playlist():
    form = PlaylistForm()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        image = form.data.get("image")
        if image:
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)
   
            if "url" not in upload:
                return jsonify({"error": "Failed to upload image to S3 1 "}), 400
            
            
        new_playlist = Playlist(
            image=upload["url"],
            name= form.data['name'],
            description = form.data['description'],
            user_id= form.data["user_id"]
        )
        db.session.add(new_playlist)
        db.session.commit()
        
        user_playlists = Playlist.query.filter_by(user_id=form.data["user_id"]).all()
        return [playlist.to_dict() for playlist in user_playlists]
      
    return jsonify({"error": form.errors}), 400

@playlist_bp.route("/edit_playlist/<int:playlistId>", methods=["PUT"])
def edit_playlist(playlistId):
    form = PlaylistForm()
    print("the form data is", form.data )
    playlist = Playlist.query.get(playlistId)
    if playlist is None:
        return jsonify({"error": "Playlist not found"}), 404
    
    form.csrf_token.data = request.cookies['csrf_token']
    
   
    if request.method == "PUT":
        # if 'image' in form.data:
        #     playlist.image = form.data['image']
        if 'name' in form.data:
            playlist.name = form.data['name']
        if 'description' in form.data:
            playlist.description = form.data['description']
        if 'user_id' in form.data:
            playlist.user_id = form.data['user_id']

        db.session.commit()
        return jsonify(playlist.to_dict())
   
    return jsonify({"error": "Invalid request method"}), 400

  


@playlist_bp.route("/songs/<int:playlistId>", methods=["GET"])
def get_songs_on_playlist(playlistId):
    """get playlist of songs"""
    songs = Song.query.filter_by(playlist_id=playlistId)
    if not songs:
        return jsonify({"message":"No song found"},400) 
    
    
    return [song.to_dict() for song in songs]
    
    

@playlist_bp.route("/<int:playlistId>", methods=["GET"])
def get_playlist(playlistId):
    """get playlist """
    playlist = Playlist.query.get(playlistId)
    if not playlist:
        return jsonify({"message":"No playlist found"},400) 
    
    
    return playlist.to_dict()

@playlist_bp.route("/add_song/<int:playlistId>/<int:songId>", methods=["POST"])
def add_song_to_playlist(playlistId,songId):
    """add song to playlist"""

    songToAdd = Song.query.get(songId)
    playlist = Playlist.query.get(playlistId)
    # songs = Song.query.filter_by(playlist_id=playlistId)
    
    if songToAdd not in playlist.songs:
        playlist.songs.append(songToAdd)
        db.session.commit()
        return [song.to_dict() for song in playlist.songs]

    else:
        return jsonify({'message': 'Song already in the playlist'})
    
@playlist_bp.route("/delete_song/<int:playlistId>/<int:songId>", methods=["DELETE"])
def delete_song_from_playlist (playlistId,songId):
     songToDelete = Song.query.get(songId)
     playlist = Playlist.query.get(playlistId)
     
     if songToDelete in playlist.songs:
         playlist.songs.remove(songToDelete)
         db.session.commit()
         return [song.to_dict() for song in playlist.songs]
     else:
         return jsonify({'message': 'Song not in  playlist'})
     
@playlist_bp.route("/delete_playlist/<int:playlistId>/", methods=["DELETE"])
def delete_playlist(playlistId):
    playlist = Playlist.query.get(playlistId)
    playlist_arr = Playlist.query.all()
    
    if playlist and playlist in playlist_arr:
        playlist_arr.remove(playlist)
        return jsonify([play.to_dict() for play in playlist_arr])
    else:
        return jsonify({"no playlist"})
    
    
    
    
    