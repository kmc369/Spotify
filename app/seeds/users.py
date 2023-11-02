from app.models import db, User, environment, SCHEMA, Song
from sqlalchemy.sql import text
from .songs import seed_songs

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', 
        email='demo@aa.io', 
        image="https://static-cdn.jtvnw.net/jtv_user_pictures/7d691b26-1a61-411b-b388-1328863d0cc0-profile_image-300x300.png",
        password='password')
    marnie = User(
        username='Marnie', 
        email='marnie@aa.io',
        image="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg", 
        password='password')
    bobbie = User(
        username='bobbie',
        image="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u1.jpg",
        email='bobbie@aa.io',
        password='password')
    Olivia = User(
        username='Olivia',
        image="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u1.jpg",
        email='olivia@aa.io',
        password='password')
    Jake = User(
        username='Jake',
        image="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u1.jpg",
        email='jake@aa.io',
        password='password')
    song5 = Song(name="Take Care", time="4:37",type="R&B" , artist_id=1,album_id=2,audio_url="https://spotify-audio-bucket.s3.amazonaws.com/Take+Care.mp3")
    song10 = Song(name="The Weekend", time="4:32", type="R&B", artist_id=8, album_id=6,  audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+SZA+The+Weekend+Official+Audio+-PALMMqZLAQk-192k-1697897048.mp3",playlist_id=1)
    # song34 = Song(name="Positions", time="2:52", type="Pop", artist_id=16, album_id=5,  audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+positions-xuOOAQoDKN0-192k-1697903238.mp3")
    # podcast11 = Song(name="Black Hole Sounds", time="0:36", type="science", artist_id=21, album_id=20,  audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+What+do+black+holes+sound+like+NASA+releases+recording+of+black+hole+in+distant+galaxy-NWBkZ3bMSV0-192k-1698781941.mp3")
    # song48 = Song(name="By your side", time="3:50", type="Pop", artist_id=9, album_id=15,  audio_url="https://spotify-audio-bucket.s3.amazonaws.com/Rod+Wave+-+By+Your+Side+(Official+Video).mp3")

    demo.songs.append(song5)
    demo.songs.append(song10)
    # demo.songs.append(song48)
    # demo.songs.append(song34)
    # demo.songs.append(podcast11)
    
    


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(Olivia)
    db.session.add(Jake)
    db.session.commit()



def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.user_songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        db.session.execute(text("DELETE FROM user_songs"))
        
    db.session.commit()