from app.models import db, Album, environment, SCHEMA
from sqlalchemy.sql import text

def seed_albums():
     
        album1 = Album(name="Purpose", time="0:49:48", type="Pop", image="https://neenahsatellite.com/wp-content/uploads/2015/11/JustinBieberPurpose.jpg", releasedate="2015-11-13", artist_id=13, user_id=1)
        album2 = Album(name="Take Care", time="1:20:24",type="R&B" , image="https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg",releasedate="2011-11-15" ,artist_id=1,user_id=2)
        album3 = Album(name="Reputation", time="0:55:38", type="Pop", image="https://i.pinimg.com/originals/e1/53/c3/e153c31333acd233550e0e53ab59db97.jpg", releasedate="2017-11-10", artist_id=14, user_id=3)
        album4 = Album(name="Thriller", time="0:42:19", type="Pop", image="https://preview.redd.it/eiterwv9fdn51.jpg?auto=webp&s=a6de83ab0203a387021631204251581b05b697be", releasedate="1982-11-30", artist_id=15, user_id=4)
        album5 = Album(name="Positions", time="0:41:05", type="Pop", image="https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", releasedate="2020-10-30", artist_id=16, user_id=1)
        
        album6 = Album(name="Ctrl", time="49:24", type="R&B",image="https://best-fit.transforms.svdcdn.com/production/images/sza-press-shot-2-main.jpg?w=1200&h=796&q=100&auto=format&fit=crop&dm=1642894517&s=49c3b6d97f8ad9acf40bef6a9f1b298b", releasedate="2017-06-09",artist_id=1,user_id=1)
        album7 = Album(name="Playing Games", time="52:30", type="R&B", image="https://i.pinimg.com/originals/a6/18/48/a618486cbff9d4c456525858917bd808.jpg", releasedate="2022-07-01", artist_id=12, user_id=1)

        album8 = Album(name="Master of Puppets", time="54:47", type="Heavy Metal",image="https://www.jamminrecordings.com/cdn/shop/products/Metallica_-_Master_Of_Puppets_-_CD_large.jpg?v=1656291879",releasedate="1986-03-03", artist_id=3,user_id=1)
        album9 = Album(name="Metallica (The Black Album)",time="62:41",type="Heavy Metal",image="https://i.pinimg.com/736x/59/9b/47/599b478f9e19f48e65ab25789a84fca9.jpg",releasedate="1991-08-12",artist_id=3, user_id=1)
        album10 = Album(name="Ride the Lightning",time="47:27",type="Heavy Metal",image="https://anxiousandangry.com/cdn/shop/products/MetallicaRideTheLightning.png?v=1602011579",releasedate="1984-07-27",artist_id=3,user_id=1)

        album11 = Album(name="Paranoid",time="42:11",type="Heavy Metal",image="https://upload.wikimedia.org/wikipedia/en/6/64/Black_Sabbath_-_Paranoid.jpg",releasedate="1970-09-18",artist_id=2,user_id=1)
        album12 = Album(name="Master of Reality", time="34:31", type="Heavy Metal", image="https://www.rhino.com/sites/g/files/g2000012691/files/styles/article_image/public/2021-02/R-8023718-1513442268-1830.jpeg.jpg?itok=tP-Zn0wf", releasedate="1971-07-21", artist_id=2, user_id=1)
        album13 = Album(name="Heaven and Hell", time="39:27", type="Heavy Metal", image="https://m.media-amazon.com/images/I/71y8IkqMGtL._UF1000,1000_QL80_.jpg", releasedate="1980-04-25", artist_id=2 , user_id=1)

        album14 = Album(name="Led Zeppelin IV", time="42:38", type="Rock", image="https://www.cheatsheet.com/wp-content/uploads/2019/12/led-zeppelin-iv.jpg", releasedate="1971-11-08", artist_id=3, user_id=1)
        album15 = Album(name="Private Dancer", time="44:00", type="Rock", image="https://upload.wikimedia.org/wikipedia/en/4/42/Tina_Turner_Private_Dancer_US_CD_cover_art_1984_original.jpg", releasedate="1984-05-29", artist_id=5, user_id=1)
        album16 = Album(name="From Under the Cork Tree", time="41:49", type="Pop Punk", image="https://i.discogs.com/uQKnf7qo3WhVyOaxVUud7VVQtSdQgrxC3tOT6q8Q3t8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyMjM3/OTYtMTM1OTY4NzU3/NC04NTIxLmpwZWc.jpeg", releasedate="2005-05-03", artist_id=6, user_id=1)
        
        album17 = Album(name="Boys Like Girls", time="42:55", type="Pop Rock", image="https://ih1.redbubble.net/image.688483267.8017/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg", releasedate="2006-08-22", artist_id=9, user_id=1)
        album18 = Album(name="A Fever You Can't Sweat Out", time="39:44", type="Pop Rock", image="https://media.pitchfork.com/photos/5929a1a69d034d5c69bf29e7/16:9/w_1280,c_limit/3be34bad.jpg", releasedate="2005-09-27", artist_id=10, user_id=1)
        
        album19 = Album(name="Hotel California", time="43:30", type="Rock", image="https://pure-music.co.uk/wp-content/uploads/2019/04/Hotel-California-Album-Cover.png", releasedate="1976-12-08", artist_id=11, user_id=1)
        
        
        album20 = Album(name="Break Every Rule", time="39:37", type="Rock", image="https://upload.wikimedia.org/wikipedia/en/4/42/Tina_Turner_-_Break_Every_Rule_%28album%29.png", releasedate="1986-09-23", artist_id=5, user_id=1)
        album21 = Album(name="Infinity on High", time="47:38", type="Pop Punk", image="https://www.thevro.com/wp-content/uploads/infinity-album-art-790x593.jpg", releasedate="2007-02-06", artist_id=6, user_id=1)
        album22 = Album(name="Love Drunk", time="39:55", type="Pop Rock", image="https://i.scdn.co/image/ab67616d0000b27308a2b8e9210f518f6f4fbb8a", releasedate="2009-09-08", artist_id=9, user_id=1)
            
        db.session.add(album1)
        db.session.add(album2)
        db.session.add(album3)
        db.session.add(album4)
        db.session.add(album5)
        db.session.add(album6)
        db.session.add(album7)
        db.session.add(album8)
        db.session.add(album9)
        db.session.add(album10)
        db.session.add(album11)
        db.session.add(album12)
        db.session.add(album13)
        db.session.add(album14)
        db.session.add(album15)
        db.session.add(album16)
        db.session.add(album17)
        db.session.add(album18)
        db.session.add(album19)
        db.session.add(album20)
        db.session.add(album21)
        db.session.add(album22)
        db.session.commit()

  



def undo_albums():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.albums RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM albums"))
        
    db.session.commit()