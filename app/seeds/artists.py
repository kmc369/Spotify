from app.models import db, Artist, environment, SCHEMA
from sqlalchemy.sql import text

def seed_artist():
    
    artist1 = Artist(name="Drake")
    artist2 = Artist(name="Black Sabbath")
    artist3 = Artist(name="Metallica")
    artist4 = Artist(name="Led Zeppelin")
    artist5 = Artist(name="Tina Turna")
    artist6 = Artist(name="Fall Out Boy")
    artist7 = Artist(name="Beyoncé")
    artist8 = Artist(name="SZA")
    artist9 = Artist(name="Boys Like Girls")
    artist10 = Artist(name="Panic! at the Disc")
    artist11 = Artist(name="The Eagles")
    artist12 = Artist(name="Summer Walker")
    artist13 = Artist(name="Justin Bieber")
    artist14 = Artist(name="Taylor Swift")
    artist15 = Artist(name="Michael Jackson")
    artist16 = Artist(name="Ariana Grande")
    

    db.session.add(artist1)
    db.session.add(artist2)
    db.session.add(artist3)
    db.session.add(artist4)
    db.session.add(artist5)
    db.session.add(artist6)
    db.session.add(artist7)
    db.session.add(artist8)
    db.session.add(artist9)
    db.session.add(artist10)
    db.session.add(artist11)
    db.session.add(artist12)
    db.session.add(artist13)
    db.session.add(artist14)
    db.session.add(artist15)
    db.session.add(artist16)

    db.session.commit()



def undo_artists():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.artists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM artists"))
        
    db.session.commit()