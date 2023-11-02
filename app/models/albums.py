from .db import db, environment, SCHEMA, add_prefix_for_prod


class Album(db.Model):
    __tablename__ = "albums"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    time = db.Column(db.String, nullable=False)
    type =db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    releasedate = db.Column(db.String)
    
    
#foreign key 
    artist_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("artists.id")),nullable=False)
    user_id =  db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")),nullable=True)

    songs =  db.relationship("Song", back_populates="albums",cascade="all, delete-orphan")
    artists = db.relationship("Artist", back_populates="albums")
    user = db.relationship("User", back_populates="albums")
    
    def add_prefix_for_prod(attr):
        if environment == "production":
            return f"{SCHEMA}.{attr}"
        else:
            return attr
    
    def to_dict(self):
        return {
            "id":self.id,
            "name":self.name,
            "time":self.time,
            "type":self.type,
            "image":self.image,
            "releasedate":self.releasedate,
            "artist_id":self.artist_id,
            "user_id":self.user_id,
            
            "songs": [song.to_dict() for song in self.songs],
             "artist":{
                "id":self.artists.id ,
                "name":self.artists.name
            },
            
            "user": {"id": self.user.id, 
                     "username": self.user.username
                     }
             
        }

