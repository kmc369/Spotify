from app.models import db, Song, environment, SCHEMA
from sqlalchemy.sql import text

def seed_songs():
     
    song1 = Song(name="Over My Dead Body",  time="4:32",type="R&B" ,artist_id=1,user_id=1,album_id=2,audio_url="Care-5bBcMt4mS2o-192k-1697834230.mp3")
    song2 = Song(name="Shot for Me", time="3:44",type="R&B" , artist_id=1,user_id=1,album_id=2,audio_url="onlymp3.to - Shot For Me-wc7JPaRV5uU-192k-1697834143.mp3")
    song3 = Song(name="Headlines", time="3:56",type="R&B" , artist_id=1,user_id=1,album_id=2,audio_url="onlymp3.to - Headlines-Sn3SUnL44w4-192k-1697834302.mp3")
    song4 = Song(name="Crew Love", time="3:29", type="R&B" ,artist_id=1,user_id=2,album_id=2,audio_url="onlymp3.to - Headlines-Sn3SUnL44w4-192k-1697834302.mp3")
    song5 = Song(name="Take Care", time="4:37",type="R&B" , artist_id=1,user_id=2,album_id=2,audio_url="onlymp3.to - Headlines-Sn3SUnL44w4-192k-1697834302.mp3")

    

    
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