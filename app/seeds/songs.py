from app.models import db, Song, environment, SCHEMA
from sqlalchemy.sql import text

def seed_songs():
     
    song1 = Song(name="Over My Dead Body",  time="4:32",type="R&B" ,artist_id=1,user_id=1,album_id=2,audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Over+My+Dead+Body-PMk8L9FNqnY-192k-1697895874.mp3")
    song2 = Song(name="Shot for Me", time="3:44",type="R&B" , artist_id=1,user_id=1,album_id=2,audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Shot+For+Me-wc7JPaRV5uU-192k-1697895570.mp3")
    song3 = Song(name="Headlines", time="3:56",type="R&B" , artist_id=1,user_id=3,album_id=2,audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Headlines-Sn3SUnL44w4-192k-1697834302.mp3")
    song4 = Song(name="Crew Love", time="3:29", type="R&B" ,artist_id=1,user_id=4,album_id=2,audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Crew+Love-WL-3zvnUomk-192k-1697895793.mp3")
    song5 = Song(name="Take Care", time="4:37",type="R&B" , artist_id=1,user_id=1,album_id=2,audio_url="https://spotify-audio-bucket.s3.amazonaws.com/Take+Care.mp3")

    song6 = Song(name="Supermodel", time="3:59", type="R&B", artist_id=8, album_id=6, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Supermodel-tZeKZNcLUpc-192k-1697896710.mp3")
    song7 = Song(name="Love Galore (featuring Travis Scott)", time="4:35", type="R&B", artist_id=8, album_id=6, user_id=2, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+SZA+Love+Galore+Alt+Version+Audio+-5YOEzmyM-Zs-192k-1697896789.mp3")
    song8 = Song(name="Drew Barrymore", time="3:51", type="R&B", artist_id=8, album_id=6, user_id=3, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+SZA+Drew+Barrymore+Official+Video+-dp45V_M4Akw-192k-1697896898.mp3")
    song9 = Song(name="Prom", time="3:16", type="R&B", artist_id=8, album_id=6, user_id=4, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+SZA+Prom+Audio+-CAgzfcWAlTo-192k-1697896970.mp3")
    song10 = Song(name="The Weekend", time="4:32", type="R&B", artist_id=8, album_id=6, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+SZA+The+Weekend+Official+Audio+-PALMMqZLAQk-192k-1697897048.mp3")
        

    
    song11 = Song(name="Battery", time="5:12", type="Metal", artist_id=3, album_id=8, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Battery+Remastered+-RvW4OQFA_UY-192k-1697897751.mp3")
    song12 = Song(name="Master of Puppets", time="8:35", type="Metal", artist_id=3, album_id=8, user_id=2, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Metallica+Master+Of+Puppets+Lyrics+-xnKhsTXoKCI-192k-1697898103.mp3")
    song13 = Song(name="The Thing That Should Not Be", time="6:36", type="Metal", artist_id=3, album_id=8, user_id=3, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+The+Thing+That+Should+Not+Be+Remastered+-DoHk21aGHas-192k-1697898009.mp3")
    song14 = Song(name="Welcome Home (Sanitarium)", time="6:27", type="Metal", artist_id=3, album_id=8, user_id=4, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Welcome+Home+Sanitarium+Remastered+-ZiIc0HuJ78Q-192k-1697897894.mp3")
    song15 = Song(name="Disposable Heroes", time="8:14", type="Metal", artist_id=3, album_id=8, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Disposable+Heroes+Remastered+-dzssbzIsmqU-192k-1697897828.mp3")
    
    db.session.add(song1)
    db.session.add(song2)
    db.session.add(song3)
    db.session.add(song4)
    db.session.add(song5)
    db.session.add(song6)
    db.session.add(song7)
    db.session.add(song8)
    db.session.add(song9)
    db.session.add(song10)
    db.session.add(song11)
    db.session.add(song12)
    db.session.add(song13)
    db.session.add(song14)
    db.session.add(song15)
    db.session.commit()

  



def undo_songs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM songs"))
        
    db.session.commit()