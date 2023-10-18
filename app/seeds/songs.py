from app.models import db, Song, environment, SCHEMA
from sqlalchemy.sql import text

def seed_songs():
     
    song1 = Song(name="Over My Dead Body",  time="4:32",type="R&B" ,artist_id=1,user_id=1,album_id=2)
    song2 = Song(name="Shot for Me", time="3:44",type="R&B" , artist_id=1,user_id=1,album_id=2)
    song3 = Song(name="Headlines", time="3:56",type="R&B" , artist_id=1,user_id=1,album_id=2)
    song4 = Song(name="Crew Love", time="3:29", type="R&B" ,artist_id=1,user_id=2,album_id=2)
    song5 = Song(name="Take Care", time="4:37",type="R&B" , artist_id=1,user_id=2,album_id=2)

    

    
    db.session.add(song1)
    db.session.add(song2)
    db.session.add(song3)
    db.session.add(song4)
    db.session.add(song5)
    db.session.commit()

  



def undo_songs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM songs"))
        
    db.session.commit()