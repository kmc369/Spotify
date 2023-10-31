from app.models import db, Song, environment, SCHEMA
from sqlalchemy.sql import text

def seed_songs():
     
    
    song1 = Song(name="Over My Dead Body",  time="4:32",type="R&B" ,artist_id=1,user_id=2,album_id=2,audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Over+My+Dead+Body-PMk8L9FNqnY-192k-1697895874.mp3")
    song2 = Song(name="Shot for Me", time="3:44",type="R&B" , artist_id=1,user_id=1,album_id=2,audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Shot+For+Me-wc7JPaRV5uU-192k-1697895570.mp3",playlist_id=1)
    song3 = Song(name="Headlines", time="3:56",type="R&B" , artist_id=1,user_id=3,album_id=2,audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Headlines-Sn3SUnL44w4-192k-1697834302.mp3")
    song4 = Song(name="Crew Love", time="3:29", type="R&B" ,artist_id=1,user_id=4,album_id=2,audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Crew+Love-WL-3zvnUomk-192k-1697895793.mp3")
    song5 = Song(name="Take Care", time="4:37",type="R&B" , artist_id=1,user_id=5,album_id=2,audio_url="https://spotify-audio-bucket.s3.amazonaws.com/Take+Care.mp3")

    song6 = Song(name="Supermodel", time="3:59", type="R&B", artist_id=8, album_id=6, user_id=3, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Supermodel-tZeKZNcLUpc-192k-1697896710.mp3")
    song7 = Song(name="Love Galore (featuring Travis Scott)", time="4:35", type="R&B", artist_id=8, album_id=6, user_id=2, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+SZA+Love+Galore+Alt+Version+Audio+-5YOEzmyM-Zs-192k-1697896789.mp3")
    song8 = Song(name="Drew Barrymore", time="3:51", type="R&B", artist_id=8, album_id=6, user_id=3, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+SZA+Drew+Barrymore+Official+Video+-dp45V_M4Akw-192k-1697896898.mp3")
    song9 = Song(name="Prom", time="3:16", type="R&B", artist_id=8, album_id=6, user_id=4, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+SZA+Prom+Audio+-CAgzfcWAlTo-192k-1697896970.mp3")
    song10 = Song(name="The Weekend", time="4:32", type="R&B", artist_id=8, album_id=6, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+SZA+The+Weekend+Official+Audio+-PALMMqZLAQk-192k-1697897048.mp3",playlist_id=1)
        

    
    song11 = Song(name="Battery", time="5:12", type="Metal", artist_id=3, album_id=7, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Battery+Remastered+-RvW4OQFA_UY-192k-1697897751.mp3",playlist_id=1)
    song12 = Song(name="Master of Puppets", time="8:35", type="Metal", artist_id=3, album_id=7, user_id=2, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Metallica+Master+Of+Puppets+Lyrics+-xnKhsTXoKCI-192k-1697898103.mp3")
    song13 = Song(name="The Thing That Should Not Be", time="6:36", type="Metal", artist_id=3, album_id=7, user_id=3, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+The+Thing+That+Should+Not+Be+Remastered+-DoHk21aGHas-192k-1697898009.mp3")
    song14 = Song(name="Welcome Home (Sanitarium)", time="6:27", type="Metal", artist_id=3, album_id=7, user_id=4, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Welcome+Home+Sanitarium+Remastered+-ZiIc0HuJ78Q-192k-1697897894.mp3")
    song15 = Song(name="Disposable Heroes", time="8:14", type="Metal", artist_id=3, album_id=7, user_id=5, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Disposable+Heroes+Remastered+-dzssbzIsmqU-192k-1697897828.mp3")
    
    song16 = Song(name="Sorry", time="3:20", type="Pop", artist_id=13, album_id=1, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Justin+Bieber+Sorry+Lyrics+-BerNfXSuvJ0-192k-1697899956.mp3",playlist_id=1)
    song17 = Song(name="Love Yourself", time="3:53", type="Pop", artist_id=13, album_id=1, user_id=2, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Justin+Bieber+Love+Yourself+Lyrics+-taf1Idq_PC4-192k-1697900169.mp3")
    song18 = Song(name="What Do You Mean?", time="3:27", type="Pop", artist_id=13, album_id=1, user_id=3, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Justin+Bieber+What+Do+You+Mean+Lyrics+-LJjSyVe9LAs-192k-1697900238.mp3")
    song19 = Song(name="Company", time="3:28", type="Pop", artist_id=13, album_id=1, user_id=3, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Justin+Bieber+Company+Lyrics+-UPDDSxVThgQ-192k-1697900317.mp3")
    song20 = Song(name="Where Are Ü Now", time="4:10", type="Pop", artist_id=13, album_id=1, user_id=4, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Justin+Bieber+Where+Are+U+Now+Lyrics+with+Skrillex+and+Diplo-3ek2pU4m6Js-192k-1697900457.mp3")
    
    song21 = Song(name="Look What You Made Me Do", time="3:31", type="Pop", artist_id=14, album_id=3, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Taylor+Swift+Don+t+Blame+Me+Lyrics+-Os0mdp3pX7U-192k-1697901138.mp3")
    song22 = Song(name="Delicate", time="3:52", type="Pop", artist_id=14, album_id=3, user_id=2, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Taylor+Swift+Delicate+Lyrics+-u9QOiBH0eYU-192k-1697901234.mp3")
    song23 = Song(name="End Game", time="4:04", type="Pop", artist_id=14, album_id=3, user_id=3, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Taylor+Swift+End+Game+ft.+Ed+Sheeran+Future+Lyrics+-zjOddwR4nqw-192k-1697901340.mp3")
    song24 = Song(name="Ready for It?", time="3:27", type="Pop", artist_id=14, album_id=3, user_id=4, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Taylor+Swift+...Ready+For+It+Audio+-T62maKYX9tU-192k-1697901409.mp3")
    
    song25 = Song(name="Wanna Be Startin' Somethin", time="6:03", type="Pop", artist_id=15, album_id=4, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Michael+Jackson+Wanna+Be+Startin+Somethin+Audio+-1XMvPTFzgVU-192k-1697901864.mp3",playlist_id=2)
    song26 = Song(name="Baby Be Mine", time="4:20", type="Pop", artist_id=15, album_id=4, user_id=2, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Michael+Jackson+Baby+Be+Mine+Audio+-O3tnOVideSo-192k-1697901951.mp3")
    song27 = Song(name="Human Nature", time="4:06", type="Pop", artist_id=15, album_id=4, user_id=3, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Michael+Jackson+Human+Nature+Lyrics+Video+-UxnvqXGYpvY-192k-1697902077.mp3")
    song28 = Song(name="Thriller", time="5:57", type="Pop", artist_id=15, album_id=4, user_id=4, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Michael+Jackson+Thriller+Official+Video+Shortened+Version+-4V90AmXnguw-192k-1697902344.mp3")
    song29 = Song(name="Beat It", time="4:18", type="Pop", artist_id=15, album_id=4, user_id=5, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Beat+It+Michael+Jackson+Lyrics+-8fO8jVZ3T9g-192k-1697902469.mp3")
    song30 = Song(name="Man in the Mirror", time="5:04", type="Pop", artist_id=15, album_id=4, user_id=5, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Man+in+the+Mirror-Z9NYDgbKsBE-192k-1697902176.mp3")
    
    song31 = Song(name="34+35", time="2:53", type="Pop", artist_id=16, album_id=5, user_id=2, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+34+35+Ariana+Grande+Lyrics+-7sWO2cHTQx4-192k-1697903000.mp3")
    song32 = Song(name="POV", time="3:20", type="Pop", artist_id=16, album_id=5, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Ariana+Grande+pov+audio+-nQJEp-k-ogs-192k-1697903169.mp3")
    song33 = Song(name="Just Like Magic", time="2:29", type="Pop", artist_id=16, album_id=5, user_id=4, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Ariana+Grande+just+like+magic+audio+-zMEzD2G2IKA-192k-1697903099.mp3")
    song34 = Song(name="Positions", time="2:52", type="Pop", artist_id=16, album_id=5, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+positions-xuOOAQoDKN0-192k-1697903238.mp3")
    song35 =Song(name="Ad", time="1:52", type="AD", artist_id=16, album_id=5, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Want+A+Break+From+The+ADs+-7OBacT66SCM-192k-1698588820.mp3")
    
    song36 = Song(name= "Stairway to Heaven",time= "8:02",type= "Rock",artist_id=4,album_id=9,user_id= 1,audio_url= "https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Stairway+to+Heaven+Led+Zeppelin+Lyrics-qHFxncb1gRY-192k-1698788056.mp3")
    song37 = Song(name="Black Dog", time="4:55", type="Rock", artist_id=4, album_id=9, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Led+Zeppelin+Black+Dog+lyrics+-NwBtLnq0_Ic-192k-1698788683.mp3")
    
    song38 = Song(name="The Great Escape", time="3:12", type="Pop", artist_id=9, album_id=10, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Boys+Like+Girls+The+Great+Escape-JGPgxoIPY6Q-192k-1698789194.mp3")
    song39 = Song(name="Hero/Heroine", time="3:51", type="Pop", artist_id=9, album_id=10, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Hero+Heroine+Boys+Like+Girls+LYRICS-15ukJxqPvuE-192k-1698789059.mp3")
    
    song40 = Song(name="I Write Sins Not Tragedies", time="3:06", type="Alternative", artist_id=10, album_id=11, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Panic+At+The+Disco+I+Write+Sins+Not+Tragedies+OFFICIAL+VIDEO+-vc6vs-l5dkc-192k-1698789489.mp3")
    song41 = Song(name="Time to Dance", time="3:22", type="Alternative", artist_id=10, album_id=11, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+panic__at_the_disco___time_to_dance__official_audio_-JfUug-R7M5g-192k-1698789427.mp3")
    
    song42 = Song(name="Hotel California", time="6:30", type="Rock", artist_id=11, album_id=12, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Hotel+California+Lyrics+The+Eagles-ESj7dNMptXs-192k-1698789778.mp3")
    song43 = Song(name="New Kid in Town", time="5:04", type="Rock", artist_id=11, album_id=12, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+New+Kid+in+Town+2013+Remaster+-L4LxavmC4_4-192k-1698789729.mp3")
    
    song44 = Song(name="What's Love Got to Do with It", time="3:49", type="Rock", artist_id=5, album_id=13, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+What+s+Love+Got+to+Do+with+It+2015+Remaster+-1avX1lX7gSs-192k-1698790111.mp3")
    song45 = Song(name="We Don't Need Another Hero (Thunderdome)", time="4:15", type="Rock", artist_id=5, album_id=13, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+We+Don+t+Need+Another+Hero+Thunderdome+-kDERlmd2NS4-192k-1698790100.mp3")

    song46 = Song(name="Im Like a Lawyer", time="3:32", type="Alternative", artist_id=6, album_id=14, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/Fall+Out+Boy+-+I'm+Like+A+Lawyer+With+The+Way+I'm+Always+Trying+To+Get+You+Off+(Me+%26+You).mp3")
    song47 = Song(name="Thnks fr th Mmrs", time="3:23", type="Alternative", artist_id=6, album_id=14, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/Fall+Out+Boy+-+Thnks+Fr+Th+Mmrs+(Audio)+(HD).mp3")
    
    song48 = Song(name="By your side", time="3:50", type="Pop", artist_id=9, album_id=15, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/Rod+Wave+-+By+Your+Side+(Official+Video).mp3")
    song49 = Song(name="Hey there Delilah", time="3:40", type="Pop", artist_id=9, album_id=15, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/Plain+White+T's+-+Hey+There+Delilah.mp3")
    
    podcast1 = Song(name="climate crisis", time="11:36", type="Sciene", artist_id=17, album_id=16, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+John+Doerr+and+Ryan+Panchadsaram+An+action+plan+for+solving+the+climate+crisis+TED+Countdown-ZrdgSp-OVpM-192k-1698777774.mp3")
    podcast2 = Song(name="Wind Energy Could Power Earth", time="10:36", type="Sciene", artist_id=17, album_id=16, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+How+Wind+Energy+Could+Power+Earth+...+18+Times+Over+Dan+J%C3%B8rgensen+TED+Countdown-adJnm7Yopdo-192k-1698778388.mp3")
    podcast3 = Song(name="Billion-Dollar Pollution Solution Humanity", time="13:36", type="Sciene", artist_id=17, album_id=16, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+The+Billion+Dollar+Pollution+Solution+Humanity+Needs+Right+Now+Stacy+Kauk+TED-IGIT-vENgaQ-192k-1698778602.mp3")

    podcast4 = Song(name="Buying Twitter X", time="13:36", type="Hot topics", artist_id=18, album_id=17, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Elon+Musk+on+Buying+Twitter+and+Turning+It+Into+X-N8Nf56srwcA-192k-1698779242.mp3")
    podcast5 = Song(name="America is Collapsing", time="5:36", type="Hot topics", artist_id=18, album_id=17, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Jimmy+Carr+Doesn+t+Think+America+is+Collapsing+Like+the+Roman+Empire-frCnYp9Wwrg-192k-1698779805.mp3")
    
    podcast6 = Song(name="Water on the Moon", time="7:36", type="Science", artist_id=19, album_id=18, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Why+Artemis+III+Is+Going+To+The+Lunar+South+Pole+Neil+deGrasse+Tyson+Explains+-4tOvImrGM9g-192k-1698780295.mp3")
    podcast7 = Song(name="Inside Objects", time="3:36", type="Science", artist_id=19, album_id=18, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Why+Artemis+III+Is+Going+To+The+Lunar+South+Pole+Neil+deGrasse+Tyson+Explains+-4tOvImrGM9g-192k-1698780295.mp3")

    podcast8 = Song(name="Warren Buffett", time="3:36", type="Finace", artist_id=20, album_id=19, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+Warren+Buffett+You+Only+Need+To+Know+These+7+Rules-63oF8BOMMB8-192k-1698781092.mp3")
    podcast9 = Song(name="The Collapse", time="10:36", type="Finace", artist_id=20, album_id=19, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+DANGER+It+Begins...+Jim+Rickards+-u-mIjQW4qvU-192k-1698781316.mp3")

    podcast10 = Song(name="RAS Supermassive:", time="1:36", type="Science", artist_id=21, album_id=20, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+RAS+Supermassive+the+Power+of+Space+Probes-gTEgDV_DChQ-192k-1698781812.mp3")
    podcast11 = Song(name="Black Hole Sounds", time="0:36", type="Science", artist_id=21, album_id=20, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+What+do+black+holes+sound+like+NASA+releases+recording+of+black+hole+in+distant+galaxy-NWBkZ3bMSV0-192k-1698781941.mp3")

    podcast12 = Song(name="Be The Change", time="8:36", type="Motivation", artist_id=22, album_id=8, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+be_the_change_you_want_to_see_in_the_world___motivational_speech_for_2023_by_corey_d_jones-gbRe1bI_EbE-192k-1698783126.mp3")
    podcast13 = Song(name="Discipline 7000 hours", time="10:41", type="Motivation", artist_id=22, album_id=8, user_id=1, audio_url="https://spotify-audio-bucket.s3.amazonaws.com/onlymp3.to+-+What+7000+HOURS+of+DISCIPLINE+Looks+Like-mQZRs5tXWN4-192k-1698783227.mp3")

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
    db.session.add(song16)
    db.session.add(song17)
    db.session.add(song18)
    db.session.add(song19)
    db.session.add(song20)
    db.session.add(song21)
    db.session.add(song22)
    db.session.add(song23)
    db.session.add(song24)
    db.session.add(song25)
    db.session.add(song26)
    db.session.add(song27)
    db.session.add(song28)
    db.session.add(song29)
    db.session.add(song30)
    db.session.add(song31)
    db.session.add(song32)
    db.session.add(song33)
    db.session.add(song34)
    db.session.add(song35)
    db.session.add(song36)
    db.session.add(song37)
    db.session.add(song38)
    db.session.add(song39)
    
    db.session.add(song40)
    db.session.add(song41)
    
    db.session.add(song42)
    db.session.add(song43)
    
    db.session.add(song44)
    db.session.add(song45)
    
    db.session.add(song46)
    db.session.add(song47)
    
    db.session.add(song48)
    db.session.add(song49)
    
    db.session.add(podcast1)
    db.session.add(podcast2)
    db.session.add(podcast3)
    
    db.session.add(podcast4)
    db.session.add(podcast5)
    
    db.session.add(podcast6)
    db.session.add(podcast7)
    
    db.session.add(podcast8)
    db.session.add(podcast9)
    
    db.session.add(podcast10)
    db.session.add(podcast11)
    
    db.session.add(podcast12)
    db.session.add(podcast13)
    db.session.commit()

  



def undo_songs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM songs"))
        
    db.session.commit()