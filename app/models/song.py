from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import user_songs_table

class Song(db.Model):
    __tablename__ = "songs"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    time = db.Column(db.String, nullable=False)
    type = db.Column(db.String, nullable=False)

    artist_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("artists.id")), nullable=False)
    album_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("albums.id")), nullable=False)
    audio_url = db.Column(db.String, nullable=False)
    playlist_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("playlists.id")))

    # Define the many-to-many relationship with users
    users = db.relationship('User', secondary=user_songs_table, backref='liked_songs')
    artists = db.relationship("Artist", back_populates="songs")
    albums = db.relationship("Album", back_populates="songs")
    playlist = db.relationship("Playlist", back_populates="songs")
    
    
    def add_prefix_for_prod(attr):
        if environment == "production":
            return f"{SCHEMA}.{attr}"
        else:
            return attr

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "time": self.time,
            "type": self.type,
            "audio_url": self.audio_url,
            "artist_id": self.artist_id,
            "album_id": self.album_id,
            "playlist_id": self.playlist_id,
            "users": [user.to_dict() for user in self.users],
            "artist": {
                "name": self.artists.name if self.artists else None,
            },
            "albums": {
                "name": self.albums.name if self.albums else None,
                "image": self.albums.image
            },
            "playlist": {
                "name": self.playlist.name if self.playlist else None,
                "image": self.playlist.image if self.playlist else None,
                "description": self.playlist.description if self.playlist else None,
            }
        }
