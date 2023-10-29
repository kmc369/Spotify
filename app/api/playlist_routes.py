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
        return jsonify(new_playlist.to_dict())
    return jsonify({"error": form.errors}), 400


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
    print("IN PLAYLIST ")
    songToAdd = Song.query.get(songId)
    playlist = Playlist.query.get(playlistId)
    # songs = Song.query.filter_by(playlist_id=playlistId)
    
    if songToAdd not in playlist.songs:
        playlist.songs.append(songToAdd)
        db.session.commit()
        return [song.to_dict() for song in playlist.songs]

    else:
        return jsonify({'message': 'Song already in the playlist'})
    
    
    