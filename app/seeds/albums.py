from app.models import db, Album, environment, SCHEMA
from sqlalchemy.sql import text

def seed_albums():
     
        album1 = Album(name="Purpose", time="0:49:48", type="Pop", image="https://neenahsatellite.com/wp-content/uploads/2015/11/JustinBieberPurpose.jpg", releasedate="2015-11-13", artist_id=13, user_id=1)
        album2 = Album(name="Take Care", time="1:20:24",type="R&B" , image="https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg",releasedate="2011-11-15" ,artist_id=1,user_id=2)
        album3 = Album(name="Reputation", time="0:55:38", type="Pop", image="https://i.pinimg.com/originals/e1/53/c3/e153c31333acd233550e0e53ab59db97.jpg", releasedate="2017-11-10", artist_id=14, user_id=3)
        album4 = Album(name="Thriller", time="0:42:19", type="Pop", image="https://preview.redd.it/eiterwv9fdn51.jpg?auto=webp&s=a6de83ab0203a387021631204251581b05b697be", releasedate="1982-11-30", artist_id=15, user_id=4)
        album5 = Album(name="Positions", time="0:41:05", type="Pop", image="https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png", releasedate="2020-10-30", artist_id=16, user_id=1)
        
        album6 = Album(name="Ctrl", time="49:24", type="R&B",image="https://best-fit.transforms.svdcdn.com/production/images/sza-press-shot-2-main.jpg?w=1200&h=796&q=100&auto=format&fit=crop&dm=1642894517&s=49c3b6d97f8ad9acf40bef6a9f1b298b", releasedate="2017-06-09",artist_id=1,user_id=1)

        album7= Album(name="Master of Puppets", time="54:47", type="Heavy Metal",image="https://www.jamminrecordings.com/cdn/shop/products/Metallica_-_Master_Of_Puppets_-_CD_large.jpg?v=1656291879",releasedate="1986-03-03", artist_id=3,user_id=1)

        album8 = Album(name="Motivation Madness", time="34:31", type="Podcast", image="https://ih1.redbubble.net/image.1572552637.7464/aps,504x498,medium,transparent-pad,600x600,f8f8f8.jpg", releasedate="2019-07-21", artist_id=22, user_id=1)


        album9 = Album(name="Led Zeppelin IV", time="42:38", type="Rock", image="https://www.cheatsheet.com/wp-content/uploads/2019/12/led-zeppelin-iv.jpg", releasedate="1971-11-08", artist_id=3, user_id=1)

        
        album10 = Album(name="Boys Like Girls", time="42:55", type="Pop Rock", image="https://ih1.redbubble.net/image.688483267.8017/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg", releasedate="2006-08-22", artist_id=9, user_id=1)
        album11 = Album(name="A Fever You Can't Sweat Out", time="39:44", type="Pop Rock", image="https://media.pitchfork.com/photos/5929a1a69d034d5c69bf29e7/16:9/w_1280,c_limit/3be34bad.jpg", releasedate="2005-09-27", artist_id=10, user_id=1)
        
        album12 = Album(name="Hotel California", time="43:30", type="Rock", image="https://pure-music.co.uk/wp-content/uploads/2019/04/Hotel-California-Album-Cover.png", releasedate="1976-12-08", artist_id=11, user_id=1)
        
        
        album13= Album(name="Break Every Rule", time="39:37", type="Rock", image="https://upload.wikimedia.org/wikipedia/en/4/42/Tina_Turner_-_Break_Every_Rule_%28album%29.png", releasedate="1986-09-23", artist_id=5, user_id=1)
        album14 = Album(name="Infinity on High", time="47:38", type="Pop Punk", image="https://www.thevro.com/wp-content/uploads/infinity-album-art-790x593.jpg", releasedate="2007-02-06", artist_id=6, user_id=1)
        album15 = Album(name="Love Drunk", time="39:55", type="Pop Rock", image="https://i.scdn.co/image/ab67616d0000b27308a2b8e9210f518f6f4fbb8a", releasedate="2009-09-08", artist_id=9, user_id=1)
        
        podcast16 = Album(name="climate crisis", time="101:36", type="Podcast",image="https://www.doolecommunications.com/wp-content/uploads/2018/11/ted-talks-logo.jpg", releasedate="2023-03-01", artist_id=17, user_id=1 )
        
        
        podcast17= Album(name="Joe Rogan", time="51:36", type="Podcast",image="https://static.libsyn.com/p/assets/7/1/f/3/71f3014e14ef2722/JREiTunesImage2.jpg", releasedate="2023-03-01", artist_id=18, user_id=1 )
        podcast18 = Album(name="StarTalk", time="43:36", type="Podcast",image="https://cdn1.edgedatg.com/aws/v2/natgeotv/StarTalkWithNeilDeGrasseTyson/showimages/93b8bb196eb7495d6ac004231e52844f/1600x900-Q90_93b8bb196eb7495d6ac004231e52844f.jpg", releasedate="2023-09-01", artist_id=19, user_id=1)

        podcast19 = Album(name="Finance Talk", time="13:36", type="Podcast",image="https://www.thebalancemoney.com/thmb/R69sAaPnfWX8xEYvTAx2F87CNfI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TheInvestorsPodcast-5c3f507246e0fb0001cc3d66.jpeg", releasedate="2023-01-01", artist_id=20, user_id=1)

        podcast20 = Album(name="Space Travel", time="22:30", type="Podcast", image="https://astrocamp.org/app/uploads/2015/12/IS-BH-1024x576-1.jpg", releasedate="2022-07-01", artist_id=21, user_id=1)


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
    
        
        db.session.add(podcast16)
        db.session.add(podcast17)
        db.session.add(podcast18)
        db.session.add(podcast19)
        db.session.add(podcast20)
        db.session.commit()

  



def undo_albums():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.albums RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM albums"))
        
    db.session.commit()