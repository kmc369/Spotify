from app.models import db, Playlist, environment, SCHEMA
from sqlalchemy.sql import text

def seed_playlist():
    
    play1= Playlist(
        name="My_pop",
        image="https://marketplace.canva.com/EAFUhyy2GeM/2/0/1600w/canva-yellow-blue-bright-cute-lofi-study-playlist-cover-wbHlGugtbXw.jpg",
        description ="My first playlist, with all of my favorite songs",
        user_id=1,   
    )
    play2= Playlist(
        name="HipHop",
        image="https://as1.ftcdn.net/v2/jpg/03/91/98/92/1000_F_391989204_BHb2XsLsdrH8OW7q8MIGhCqbdnxkbGZc.jpg",
        description ="My second playlist, with all of my second favorite songs",
        user_id=1,   
    )

    db.session.add(play1)
    db.session.add(play2)
    db.session.commit()
    
def undo_playlist():
    if environment == "production":
            db.session.execute(f"TRUNCATE table {SCHEMA}.playlists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM playlists"))
        
    db.session.commit()