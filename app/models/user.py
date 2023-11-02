from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

# Define the association table for the many-to-many relationship
user_songs_table = db.Table(
    'user_songs',
    db.Model.metadata,
    db.Column('user_id', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True),
    db.Column('song_id', db.Integer, db.ForeignKey(add_prefix_for_prod('songs.id')), primary_key=True),
    schema=SCHEMA if environment == "production" else None
)

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    image = db.Column(db.String(1000) ,default="https://i.pinimg.com/originals/1b/71/b8/1b71b85dd741ad27bffa5c834a7ed797.png")
    hashed_password = db.Column(db.String(255), nullable=False)

    # Define the many-to-many relationship with songs
    songs = db.relationship('Song', secondary=user_songs_table, backref='liked_by_users')

    albums = db.relationship("Album", back_populates="user", cascade="all, delete-orphan")
    playlists = db.relationship("Playlist", back_populates="user", cascade="all, delete-orphan")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            "image": self.image,
            'email': self.email
        }
