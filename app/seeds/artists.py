from app.models import db, Artist, environment, SCHEMA
from sqlalchemy.sql import text

def seed_artist():
    
    artist1 = Artist(name="Drake")
    artist2 = Artist(name="Led Zeppelin")
    artist3 = Artist(name="Metallica")
    artist4 = Artist(name="Lakey Inspired")
    artist5 = Artist(name="Bad Bunny")
    artist6 = Artist(name="Taylor Swift")
    artist7 = Artist(name="Beyoncé")
    artist8 = Artist(name="SZA")
    artist9 = Artist(name="Ed Sheeran")

    db.session.add(artist1)
    db.session.add(artist2)
    db.session.add(artist3)
    db.session.add(artist4)
    db.session.add(artist5)
    db.session.add(artist6)
    db.session.add(artist7)
    db.session.add(artist8)
    db.session.add(artist9)

    db.session.commit()



def undo_artists():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.artists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM artists"))
        
    db.session.commit()