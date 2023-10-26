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
     #foreignkeys
     user_id = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)

    #relationships 
   #   songs = db.relationship("Song", back_populates="playlist", cascade="all, delete-orphan")
     songs = db.relationship("Song", back_populates="playlist", cascade="all, delete")


     user  = db.relationship("User", back_populates="playlists")

     
     def to_dict(self):
        return {
            "id":self.id,
            "name":self.name,
            "user_id":self.user_id,
            "description":self.description,
            "image":self.image,
            # "user":{
            #         "username": self.user.username,
            #         "email": self.user.email ,
            #         "image":self.user.image
            #     },
            "songs": [song.to_dict() for song in self.songs]
            
            
        }