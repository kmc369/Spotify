from app.models import db, Playlist, environment, SCHEMA
from sqlalchemy.sql import text

def seed_playlist():
    play1= Playlist(
        name="My_pop",
        user_id=1,
        
    )

    db.session.add(play1)
    db.session.commit()
    
def undo_playlist():
    if environment == "production":
            db.session.execute(f"TRUNCATE table {SCHEMA}.playlists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM playlists"))
        
    db.session.commit()