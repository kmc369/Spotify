from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField, validators
from wtforms.validators import DataRequired
from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,BooleanField,FieldList, FloatField
from flask_wtf.file import FileField, FileRequired,FileAllowed
from wtforms.validators import DataRequired, Length

ALLOWED_EXTENSIONS = {"pdf", "png", "jpg", "jpeg", "gif"}

class PlaylistForm(FlaskForm):
     image = FileField("image", validators=[FileRequired(),FileAllowed(list(ALLOWED_EXTENSIONS))])
     name  = StringField("name",validators=[DataRequired() ,Length(min=2,max=10)])
     description = StringField("description",validators=[DataRequired(),Length(min=2,max=20)])
     user_id = IntegerField('User ID', validators=[DataRequired()])