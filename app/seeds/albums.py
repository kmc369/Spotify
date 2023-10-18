from app.models import db, Album, environment, SCHEMA
from sqlalchemy.sql import text

def seed_albums():
     
        album1 = Album(name= "Thank Me Later", time= "1:02:31", type="R&B", image="https://upload.wikimedia.org/wikipedia/en/9/9c/Drake_-_Thank_Me_Later_cover.jpg",releasedate= "2010-06-15",  artist_id=1,user_id=1)
        album2 = Album(name="Take Care", time="1:20:24",type="R&B" , image="https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg",releasedate="2011-11-15" ,artist_id=1,user_id=1)
        album3 = Album(name="Nothing Was the Same", time="1:05:14", type="R&B", image="https://m.media-amazon.com/images/I/61YfOPXVn5L.jpg",releasedate="2013-09-24", artist_id=1,user_id=2)
        album4 = Album(name="Views", time="1:21:06",type="R&B" ,image="https://www.udiscovermusic.com/wp-content/uploads/2019/04/Drake-Views-album-cover-web-optimised-820-820x820.jpg", releasedate="2016-04-29", artist_id=1,user_id=2)
        album5 = Album(name="Scorpion", time="1:30:07",type="R&B" ,image="https://compote.slate.com/images/caa4b707-3470-4e0c-93ad-a7457bd02eb3.jpeg?width=780&height=520&rect=1560x1040&offset=0x0", releasedate="2018-06-29", artist_id=1,user_id=1)

    
        db.session.add(album1)
        db.session.add(album2)
        db.session.add(album3)
        db.session.add(album4)
        db.session.add(album5)
        db.session.commit()

  



def undo_albums():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.albums RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM albums"))
        
    db.session.commit()