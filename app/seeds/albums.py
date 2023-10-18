from app.models import db, Album, environment, SCHEMA
from sqlalchemy.sql import text

def seed_albums():
     
        album1 = Album(name= "Thank Me Later", time= "1:02:31", releasedate= "2010-06-15")
        album2 = Album(name="Take Care", time="1:20:24", releasedate="2011-11-15")
        album3 = Album(name="Nothing Was the Same", time="1:05:14", releasedate="2013-09-24")
        album4 = Album(name="Views", time="1:21:06", releasedate="2016-04-29")
        album5 = Album(name="Scorpion", time="1:30:07", releasedate="2018-06-29")

    
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