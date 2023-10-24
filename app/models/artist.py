from .db import db, environment, SCHEMA, add_prefix_for_prod



class Artist (db.Model):
    __tablename__ = "artists"
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    
    
    #relationshops 
    songs = db.relationship("Song", back_populates="artists", cascade="all, delete-orphan")
    albums = db.relationship("Album", back_populates="artists", cascade="all, delete-orphan")
    
    def add_prefix_for_prod(attr):
        if environment == "production":
            return f"{SCHEMA}.{attr}"
        else:
            return attr
    
    def to_dict(self):
        return{
        "id":self.id,
        "name":self.name,
        "songs":[song.to_dict() for song in self.songs],
        "albums":[album.to_dict() for album in self.albums]
            
        }
    
        
        