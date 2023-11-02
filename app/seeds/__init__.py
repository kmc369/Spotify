from flask.cli import AppGroup
from .users import seed_users, undo_users
from .albums import seed_albums, undo_albums
from .artists import seed_artist,undo_artists
from .songs import seed_songs, undo_songs
from .playlist import seed_playlist, undo_playlist
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo 
        # command, which will  truncate all tables prefixed with 
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_songs()
        undo_playlist()
        undo_albums()
        undo_artists()
    seed_songs()  
    seed_artist()
    seed_users()
    seed_albums()
    seed_playlist()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_songs()
    undo_playlist()
    undo_albums()
    undo_artists()
    # Add other undo functions here