from flask import Blueprint, jsonify, request 
from flask_login import login_required
from app.models import Song,Album,db


songs_bp = Blueprint('songs',__name__)


@songs_bp.route("/<int:albumid>", methods=["GET"])
def get_songs_of_album(albumid):
    """GET ALL THE SONGS ON AN ALBUM"""

    songs = Song.query.filter_by(album_id=albumid).all()
   
    if not songs:
        return jsonify({"message":"No song found"},400)
    return [song.to_dict() for song in songs]


@songs_bp.route("/user/<int:userid>", methods=["GET"])
def get_songs_of_album(userid):
    """GET ALL THE SONGS OF THE USER """

    songs = Song.query.filter_by(user_id=userid).all()
    print("the song is", songs)
    if not songs:
        return jsonify({"message":"No song found"},400)
    return [song.to_dict() for song in songs]
 