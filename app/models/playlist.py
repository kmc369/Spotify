from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class Playlist(db.Model):
    __tablename__ = 'playlists'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(2000), nullable=False)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    
    # Foreign keys
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)

    # Relationships
    songs = db.relationship("Song", back_populates="playlist", cascade="all, delete")

    user = db.relationship("User", back_populates="playlists")


    def add_prefix_for_prod(attr):
        if environment == "production":
            return f"{SCHEMA}.{attr}"
        else:
            return attr

    def to_dict(self):
        return {
            "id": self.id,
            "image": self.image,
            "name": self.name,
            "user_id": self.user_id,
            "description": self.description,
            "songs": [song.to_dict() for song in self.songs]
        }