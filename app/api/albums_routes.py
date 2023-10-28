from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Album


album_bp = Blueprint('albums', __name__)

@album_bp.route("/albums_type/", methods=["GET"])
def get_all_search():
    All_albums = Album.query.all()
    return [album.to_dict() for album in All_albums]
    

@album_bp.route("/albums_type/<string:params>", methods=["GET"])
def get_album_genre(params):
    albums = Album.query.filter(Album.type.ilike(f"%{params}%")).all()
    return [album.to_dict() for album in albums]


@album_bp.route("/user/<int:userid>", methods=["GET"])
def get_user_albums(userid):
    """ Query to get the albums of the user"""
    albums = Album.query.filter_by(user_id=userid)
    if not albums:
        return jsonify({"message":"no albums found"}, 400)
    return [album.to_dict() for album in albums]

@album_bp.route("/", methods=["GET"])
def get_all_albums():
    """get all albums"""
    albums = Album.query.all()
    if not albums:
        return jsonify({"message": "No albumbs found"}, 404)
    return [album.to_dict() for album in albums]